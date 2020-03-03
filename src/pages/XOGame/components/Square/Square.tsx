import * as React from "react";
import css from "./square.module.scss"
import tw from "../../../../assets/css/tailwind.module.css";

interface IProps {

}

interface IState {
    value: string
}

export default class Square extends React.Component<IProps, IState> {

    state: IState = {
        value: ''
    }

    onClickHandler = () => {
        this.setState({value: 'O'})
    }

    render() {
        return (
            <button
                className={[css.square, tw.flex, tw['text-6xl']].join(' ')}
                onClick={this.onClickHandler}
            >
                {this.state.value}
            </button>
        )
    }
}