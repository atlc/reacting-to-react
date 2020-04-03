import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class UserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: null,
            hasLoaded: false,
            headerText: 'Loading...'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                hasLoaded: true,
                headerText: 'Welcome!'
            });
        }, 1500);
    }

    handleInputChange(event) {
        this.setState({ inputText: event.target.value });
        console.log(this.state.inputText);
    }

    handleButtonToggle() {
        this.setState({
            hasLoaded: !this.state.hasLoaded,
            headerText: !this.state.hasLoaded ? 'Toggled Welcome!' : 'Toggled Loading...'
        });
    }

    render() {
        return (
            <React.Fragment>
                <h1>{this.state.headerText}</h1>
                <Form>
                    <Form.Group controlId="formEmailInput">
                        <Form.Label>Please input your email address below:</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email here!" onChange={(e) => this.handleInputChange(e)} />
                        <Form.Text className="text-muted">I promise it's not going to be used for nefarious purposes</Form.Text>
                    </Form.Group>
                    <Button variant="danger" onClick={() => this.handleButtonToggle()}>Allow us to harvest info / toggle header state</Button>
                </Form>
                <h4 style={{marginTop: 30 + 'px'}}>You've typed: {this.state.inputText}</h4>
            </React.Fragment>
        );
    }
}

export default UserForm;