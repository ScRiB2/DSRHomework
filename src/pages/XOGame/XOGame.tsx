import * as React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";


export default class XOGame extends React.Component {

    render() {
        return (
            <Container className="p-3">
                <Jumbotron>
                    <h1 className="header">XOGame</h1>
                </Jumbotron>
            </Container>
        )
    }
}