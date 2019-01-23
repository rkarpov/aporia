import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => ({
    formType: 'Login',
    credentials: { email: '', password: '' },
})

const mdp = dispatch => ({
    processForm: (user) => dispatch(login(user))
})

export default connect(msp, mdp)(SessionForm)