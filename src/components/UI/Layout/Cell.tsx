import * as React from 'react';
import classnames from 'classnames';

import {style, StylableProps} from '../Stylable/Stylable';
import styles from './Layout.module.css';

export interface Props extends StylableProps {
    /**
     * Отступ справа, по умолчанию 20px
     */
    paddingRight?: string | number;

    /**
     * Ширина ячейки
     */
    width?: string | number;

    /**
     * @private
     * Отступ сверху (для корректного отображения при переносе строки)
     */
    marginTop?: string | number;

    /**
     * @private
     * Высота самого большого лейбла в RowLayout
     */
    maxLabelHeight?: number;

    /**
     * @private
     * Ссылка на дочерний компонент Label (если он есть), передаваемая в RowLayout для расчета высоты всех лейблов
     */
    saveLabelHeight?: (height: number) => void;

    /**
     * Позиционирование ячейки по правой стороне RowLayout
     */
    right?: boolean;
}

export class Cell extends React.PureComponent<Props, {}> {
    static defaultProps: Partial<Props> = {
        paddingRight: 20
    };

    static displayName: string = 'Cell';

    private validateChildType = (child: React.ReactElement<any>) => {
        const type = child && child.type as React.ComponentClass<any>;

        if (type && type.displayName !== 'RowLayout') {
            throw new Error(
                'Компонентами <Cell> можно оборачивать только один компонент библиотеки или HTML-элемент, либо несколько компонентов <RowLayout>'
            );
        }
    };

    componentDidMount() {
        if (React.Children.count(this.props.children) > 1) {
            //@ts-ignore
            React.Children.forEach(this.props.children, this.validateChildType);
        }
    }

    /**
     * Возвращает метод перетирания marginTop у переданного аргумента.
     * Метод кеширует последний вызов.
     */
    private static cachedChildStyleGetter() {
        /** Хранение стилей child */
        let childStyle: React.CSSProperties;
        /** Хранение стилей child с перетертым marginTop */
        let cachedStyle: React.CSSProperties = {marginTop: 0};

        return function (style: React.CSSProperties | undefined) {
            if (style && childStyle !== style) {
                childStyle = style;
                cachedStyle = {...style, marginTop: 0};
            }

            return cachedStyle;
        };
    }

    /** Метод возвращающий объект style и кеширующий полученное значение */
    private getChildStyle = Cell.cachedChildStyleGetter();

    private renderChild = (Child: any) => {
        if (Child && Child.type && Child.type.withLabel) {
            return React.cloneElement(Child, {
                saveLabelHeight: this.props.saveLabelHeight,
                //  По условию у Cell может быть только один child либо много
                // children но все они должны быть RowLayout. RowLayout имеет
                // свой вертикальный маржин и не имеет флага withLabel поэтому
                // он никогда не будет клонирован в этом месте кода. У любого
                // другого объекта в Cell будет перетерт margin-top.
                //  Что бы клонируемый объект не перерисовывался при рендере
                // Cell мы в этом месте пытаемся не пересоздавать объект style.
                style: this.getChildStyle(Child.props && Child.props.style)
            });
        }

        return Child;
    };

    render() {
        const {children, paddingRight, marginTop, width, maxLabelHeight, right} = this.props;
        const cellStyles = this.props.style || {};
        const labelHeight = maxLabelHeight || 0;
        const top = marginTop ? parseInt(marginTop.toString(), 10) : 0;

        cellStyles.paddingRight = paddingRight;
        cellStyles.marginTop = `${top + labelHeight}px`;

        if (width !== undefined) {
            cellStyles.flexBasis = width;
            cellStyles.maxWidth = width;
        }

        const cellClassName = classnames(
            styles.cell,
            {
                [styles.right]: right
            }
        );

        return style(this.props,
            <div className={cellClassName} style={cellStyles}>
                {React.Children.map(children, this.renderChild)}
            </div>
        );
    }
}
