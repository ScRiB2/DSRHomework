import * as React from "react";
import {Route, Switch} from "react-router";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import XOGame from "./pages/XOGame/XOGame";

export default () => (
    <>
        <Header/>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/XOGame" component={XOGame}/>
        </Switch>
    </>
)

