import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class UserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: null,
            hasLoaded: false,
            header: <h1>Loading...</h1>
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                hasLoaded: true,
                header: <h1>Welcome!</h1>
            });
            console.log(this.state.hasLoaded);
        }, 750);
        console.log(this.state.hasLoaded);

    }

    handleInputChange(event) {
        this.setState({inputText: event.target.value});
        console.log(this.state.inputText);
    }

    handleButtonToggle() {
        console.log(this.state.hasLoaded);
        this.setState({
            hasLoaded: !this.state.hasLoaded,
            header: <h1>{this.state.hasLoaded ? 'Welcome!' : 'Loading...'}</h1>
        });
        console.log(this.state.hasLoaded);
    }

    render() {
        return (
            <React.Fragment>
                {this.state.header}
                <Form>
                    <Form.Group controlId="formEmailInput">
                        <Form.Label>Please input your email address below:</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email here!" onChange={(e) => this.handleInputChange(e)}/>
                        <Form.Text className="text-muted">I promise it's not going to be used for nefarious purposes</Form.Text>
                    </Form.Group>
                    <Button variant="danger" onClick={() => this.handleButtonToggle()}>Allow us to harvest info / toggle header state</Button>
                </Form>
            </React.Fragment>
        );
    }
}

export default UserForm;