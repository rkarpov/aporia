import React from 'react';
import SessionForm from './session_form';

class SignupForm extends React.Component {
    render() {
        return (
            <SessionForm
                formType={this.props.formType}
                credentials={this.props.credentials}
                processForm={this.props.processForm}
                errors={this.props.errors}
                // signupErrors={this.props.signupErrors}
            />
        );
    }
}

export default SignupForm;