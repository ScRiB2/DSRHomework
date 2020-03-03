import * as React from 'react';
import { style, StylableProps } from '../Stylable/Stylable';

export interface Props extends StylableProps {
    /**
     * Отступ сверху, по умолчанию 20px
     */
    paddingTop?: string | number;

    /**
     * Отступ справа, по умолчанию 20px
     */
    paddingRight?: string | number;

    /**
     * Отступ снизу, по умолчанию 20px
     */
    paddingBottom?: string | number;

    /**
     * Отступ слева, по умолчанию 20px
     */
    paddingLeft?: string | number;
}


export class FormLayout extends React.PureComponent<Props, {}> {
    static defaultProps: Props = {
        paddingTop: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingLeft: 20
    };

    static displayName = 'FormLayout';

    render() {
        const { paddingTop, paddingRight, paddingBottom, paddingLeft } = this.props;
        const styleProps = { paddingTop, paddingRight, paddingBottom, paddingLeft };
        console.log(style(this.props,
            <div style={styleProps}>
                {this.props.children}
            </div>))
        return style(this.props,
            <div style={styleProps}>
                {this.props.children}
            </div>
        );
    }
}
