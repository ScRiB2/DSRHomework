import * as React from "react";
import css from "./Main.module.scss";
import {FormLayout} from "../../components/UI/Layout/FormLayout";
import {RowLayout} from "../../components/UI/Layout/RowLayout";
import {Cell} from "../../components/UI/Layout/Cell";


export default class Main extends React.Component {

    render() {
        return (
            <FormLayout>
                <RowLayout>
                    <Cell width='100%'>
                        <h1 className={css.h1}>Welcome to the site of The_ScRiB</h1>
                    </Cell>

                </RowLayout>
            </FormLayout>
        )
    }
}