import * as React from "react";
import {FormLayout} from "../../components/UI/Layout/FormLayout";
import {RowLayout} from "../../components/UI/Layout/RowLayout";
import Square from "./components/Square/Square";
import tw from "../../assets/css/tailwind.module.css";
import css from './XOGame.module.scss'

export default class XOGame extends React.Component {

    render() {
        return (
            <FormLayout className={[tw.flex, tw['flex-col'], tw['mt-16'], css.XOGame]}>
                <RowLayout className={tw['justify-center']} marginTop={0} nowrap>
                    <Square/>
                    <Square/>
                    <Square/>
                </RowLayout>
                <RowLayout className={tw['justify-center']} marginTop={0} nowrap>
                    <Square/>
                    <Square/>
                    <Square/>
                </RowLayout>
                <RowLayout className={tw['justify-center']} marginTop={0} nowrap>
                    <Square/>
                    <Square/>
                    <Square/>
                </RowLayout>
            </FormLayout>
        )
    }
}