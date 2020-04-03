import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import HelloButtons from './HelloButtons';
import UserForm from './UserForm';

class App extends Component {
    render() {
        return (
            <Container>
                <HelloButtons buttonOne="Hello" buttonTwo="Site Map" buttonThree="Info" buttonFour="{Text from Props}, "/>
                <UserForm />
            </Container>
        );
    }
}

export default App;