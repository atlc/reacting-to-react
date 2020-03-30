import React, { Component } from 'react';
import HelloButtons from './HelloButtons';
import UserForm from './UserForm';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <HelloButtons buttonOne="Hello" buttonTwo="Site Map" buttonThree="Info" />
                <UserForm />
            </React.Fragment>
        );
    }
}

export default App;