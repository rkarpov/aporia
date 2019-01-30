import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import DemoForm from './demo_form';


const mdp = dispatch => {
    return ({
        login: user => dispatch(login(user))
    })
}

export default connect(null, mdp)(DemoForm);
