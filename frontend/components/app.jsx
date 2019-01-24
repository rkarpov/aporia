import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LogInFormContainer from '../components/session_form/login_form_container';
import SignUpFormContainer from '../components/session_form/signup_form_container';
import SessionFormContainer from '../components/session_form/session_form_container';
const App = () => {
    return (
        <div className="app-main">
                <SessionFormContainer/>
                {/* <Route exact path="/" component={LogInFormContainer} /> */}
                {/* <Route exact path="/" component={LogInFormContainer} /> */}
                {/* <Route exact path="/login" component={LogInFormContainer} /> */}
                {/* <Route exact path="/signup" component={SignUpFormContainer} />    */}
            <Switch>
            </Switch>
        </div>
    );
}

export default App;