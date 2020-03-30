import React, { Component } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns } from "react-bulma-components/dist";
import { Field, Control, Label, Input, Textarea, Select, Checkbox, Radio, Help, InputFile } from 'react-bulma-components/lib/components/form';
import Icon from 'react-bulma-components/lib/components/icon';
import 'react-bulma-components/lib/_variables.sass';
import 'react-bulma-components/lib/components/form/form.sass'

class UserForm extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         buttonOneText: this.props.buttonOne,
    //         buttonTwoText: this.props.buttonTwo,
    //         buttonThreeText: this.props.buttonThree,
    //         buttonFourText: 'Text from state, not props'
    //     }
    // }


    render() {
        return (
            <React.Fragment>
                <Columns className="is-centered is-multiline has-background-info">
                    <Columns.Column>
                        <Field>
                            <Label>Name</Label>
                            <Control>
                            <Input placeholder="Text input" />
                            </Control>
                        </Field>
                    </Columns.Column>
                </Columns>
                <Columns className="is-centered is-multiline has-background-info">
                    <Columns.Column>
                        <Field>
                            <Label>Username</Label>
                            <Control>
                            <Input color="success" type="text" placeholder="Text input" value="bulma" />
                            </Control>
                            <Help color="success">This username is available</Help>
                        </Field>
                    </Columns.Column>
                </Columns>
            </React.Fragment>
        );
    }
}

export default UserForm;