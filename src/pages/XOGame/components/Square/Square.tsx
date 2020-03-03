import * as React from "react";
import css from "./square.module.scss"
import tw from "../../../../assets/css/tailwind.module.css";

interface IProps {
    value: string;
    onClickHandler: (e: any) => void
}

export default (props: IProps) => (
    <button
        className={[css.square, tw.flex, tw['text-6xl']].join(' ')}
        onClick={props.onClickHandler}
    >
        {props.value}
    </button>

)