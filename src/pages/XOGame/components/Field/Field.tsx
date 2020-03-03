import * as React from "react";
import {RowLayout} from "../../../../components/UI/Layout/RowLayout";
import Square from "../Square/Square";

interface IProps {
    field: string[];
    onClickHandler: (i: number) => void;
}

export default (props: IProps) => {
    const renderSquare = (i: number) => {
        return <Square
            value={props.field[i]}
            onClickHandler={() => props.onClickHandler(i)}
        />
    };

    return (
        <>
            <RowLayout marginTop={0} nowrap>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </RowLayout>
            <RowLayout marginTop={0} nowrap>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </RowLayout>
            <RowLayout marginTop={0} nowrap>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </RowLayout>
        </>
    )
}