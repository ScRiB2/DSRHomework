import * as React from 'react';
import classnames from 'classnames';

import {style, StylableProps} from '../Stylable/Stylable';
import styles from './Layout.module.css';

export interface Props extends StylableProps {
    /**
     * Отступ сверху, по умолчанию 20px
     */
    marginTop?: string | number;

    /**
     * Запрет переноса ячеек Cell на следующую строку внутри одного RowLayout
     */
    nowrap?: boolean;
}

export interface State {
    maxLabelHeight?: number;
    firstRow?: boolean;
}

export class RowLayout extends React.PureComponent<Props, State> {
    static defaultProps: Props = {
        marginTop: 20
    };

    static displayName = 'RowLayout';

    state: State = {
        maxLabelHeight: 0,
        firstRow: false
    };

    componentDidMount() {
        this.componentDidUpdate();
    }

    componentDidUpdate() {
        if (!this.state.firstRow && this.row && !this.row.previousSibling) {
            this.setState({firstRow: true});
        } else if (this.state.firstRow && (!this.row || this.row.previousSibling)) {
            this.setState({firstRow: false});
        }

        if (this.labelsHeights.length > 0) {
            const maxLabelHeight = Math.max(...this.labelsHeights);
            if (maxLabelHeight !== this.state.maxLabelHeight) {
                this.setState({maxLabelHeight});
            }
            this.labelsHeights = [];
        }
    }

    labelsHeights: number[] = [];
    private saveLabelHeight = (height: number) => this.labelsHeights.push(height);

    row?: HTMLDivElement;
    private saveRowRef = (ref: HTMLDivElement) => this.row = ref;

    private renderChild = (Child: React.ReactElement<any>) => {
        if (!Child) {
            return null;
        }

        return React.cloneElement(Child,
            {
                marginTop: this.state.firstRow ? 0 : this.props.marginTop,
                maxLabelHeight: this.state.maxLabelHeight,
                saveLabelHeight: this.saveLabelHeight
            }
        )
    };

    render() {
        const className = classnames(
            styles.row,
            {
                [styles.nowrap]: this.props.nowrap
            }
        );

        return (
            style(this.props,
                <div className={className} ref={this.saveRowRef}>
                    {
                        //@ts-ignore
                        React.Children.map(this.props.children, this.renderChild)
                    }
                </div>
            )
        );
    }
}
