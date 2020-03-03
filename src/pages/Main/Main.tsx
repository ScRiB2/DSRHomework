import * as React from "react";
import {FormLayout} from "../../components/UI/Layout/FormLayout";
import {RowLayout} from "../../components/UI/Layout/RowLayout";


export default class Main extends React.Component {

    render() {
        return (
            <FormLayout>
                <RowLayout>
                    <h1>Welcome to the site of The_ScRiB</h1>
                </RowLayout>
            </FormLayout>
        )
    }
}