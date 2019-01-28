import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const msp = ({errors}) => {
    return {
        formType: 'Login',
        credentials: { email: '', password: '' },
        // loginErrors: errors.session,
        errors: errors.session,
    }
}

const mdp = dispatch => {
    return ({
        processForm: (user) => dispatch(login(user))
    })
}

export default connect(msp, mdp)(LoginForm)


// import { connect } from 'react-redux';
// import React from 'react';
// import { login } from '../../actions/session_actions';
// import LoginForm from './login_form';

// const msp = state => ({
//     formType: 'Login',
//     credentials: { email: '', password: '' },
// })

// const mdp = dispatch => ({
//     processForm: (user) => dispatch(login(user))
// })

// export default connect(msp, mdp)(LoginForm)
