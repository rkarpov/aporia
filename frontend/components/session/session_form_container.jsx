import React from 'react';
import LogInFormContainer from './login_form_container';
import SignUpFormContainer from './signup_form_container';

const sessionFormContainer = () => (
    <div className="splash-img">
        <div className="session-form-container">
            <div className="session-header-box">
                <h1 className="session-logo">Aporia</h1>
                <h4 className="session-description">A Place to share knowledge and better understand the world</h4>
            </div>
            <div className="form-boxes">
                <SignUpFormContainer />
                <LogInFormContainer />
            </div>
        </div>
    </div>


);

export default sessionFormContainer;
