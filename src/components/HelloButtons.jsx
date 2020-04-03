import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class HelloButtons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonOneText: this.props.buttonOne,
            buttonTwoText: this.props.buttonTwo,
            buttonThreeText: this.props.buttonThree,
            buttonFourText: this.props.buttonFour
        }
    }

    componentDidMount() {
        this.setState({buttonFourText: this.state.buttonFourText + ' {Text from state}'});
    }


    render() {
        return (
            <Row className="justify-content-md-center has-background-dark" style={{marginTop: 15 + 'px'}}>
                <Col>
                    <Button variant="outline-success" size="lg">{this.state.buttonOneText}</Button>
                </Col>
                <Col>
                    <Button variant="outline-primary" size="lg">{this.state.buttonTwoText}</Button>
                </Col>
                <Col>
                    <Button variant="outline-info" size="lg">{this.state.buttonThreeText}</Button>
                </Col>
                <Col>
                    <Button variant="outline-danger" size="lg">{this.state.buttonFourText}</Button>
                </Col>
            </Row>
        );
    }
}

export default HelloButtons;