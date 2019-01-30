import React from 'react';
// import SessionForm from './session_form';
// import { login } from '../../actions/session_actions';
// import LoginForm from './login_form';


class DemoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "demoUser@demo.com",
            password: "123456"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
    }

    render() {

        return(
            <div className="demo-container">
                <button className="demo-button" onClick={this.handleSubmit}>
                    Demo User
                </button>
            </div>
        )
    }

}

export default DemoForm;
