import React, { Component } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from "react-bulma-components/dist";
import { Columns } from "react-bulma-components/dist";


class HelloButtons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonOneText: this.props.buttonOne,
            buttonTwoText: this.props.buttonTwo,
            buttonThreeText: this.props.buttonThree,
            buttonFourText: 'Text from state, not props'
        }
    }


    render() {
        return (
            <Columns className="is-centered is-multiline has-background-dark">
                <Columns.Column>
                    <Button color="success" size="large">{this.state.buttonOneText}</Button>
                </Columns.Column>
                <Columns.Column>
                    <Button color="primary" size="large">{this.state.buttonTwoText}</Button>
                </Columns.Column>
                <Columns.Column>
                    <Button color="info" size="large">{this.state.buttonThreeText}</Button>
                </Columns.Column>
                <Columns.Column>
                    <Button color="danger" size="large">{this.state.buttonFourText}</Button>
                </Columns.Column>
            </Columns>
        );
    }
}

export default HelloButtons;