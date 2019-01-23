import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
    return {
        formType: 'Sign Up',
        credentials: { 
        first_name: '', last_name: '', 
        email: '', password: '', 
        },
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);