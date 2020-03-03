import * as React from 'react';
import classNames from 'classnames';
import { omit } from 'lodash';

export interface StylableProps {
    /**
     * Пользовательские классы внешнего блока
     */
    className?: ClassValue;

    /**
     * Пользовательский CSS для внешнего блока
     */
    style?: React.CSSProperties;

    /**
     * Всплывающая подсказка для внешнего блока
     */
    title?: string | JSX.Element;
}

export function omitStylableProps<T extends StylableProps>(props: T) {
    return omit(props, [ 'className', 'style' ]);
}

export function style<T extends StylableProps>(props: T, renderResult: JSX.Element) {
    const root = React.Children.only(renderResult) as JSX.Element;
    const rootProps: StylableProps = { ...root.props };

    rootProps.className = classNames(rootProps.className, props.className);
    rootProps.style = { ...rootProps.style, ...props.style };
    rootProps.title = props.title || rootProps.title;
    const result = React.cloneElement(root, rootProps);
    return result;
}
