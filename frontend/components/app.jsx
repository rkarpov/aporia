import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import SessionForm from '../components/session_form/session_form';
import LogInFormContainer from '../components/session_form/login_form_container';
import SignUpFormContainer from '../components/session_form/signup_form_container';

const App = () => {
    return (
        <div className="app-main">
         

            <Switch>
                <Route exact path="/login" component={LogInFormContainer} />
                <Route exact path="/signup" component={SignUpFormContainer} />   
            </Switch>
        </div>
    );
}

export default App;