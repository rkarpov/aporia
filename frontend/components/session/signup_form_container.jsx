import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({errors}) => {
    
    return {
        formType: 'Sign Up',
        credentials: {
            first_name: '', last_name: '',
            email: '', password: '',
        },
        errors: errors.session,
        // signupErrors: errors.session,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);