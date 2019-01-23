import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.credentials;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault;
        this.props.processForm(this.state);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }


    render() {
        return (
            <div className="session-form">
                <h1>Aporia</h1>
                <h4>A Place to share knowledge and better understand the world</h4>
                <br />

                <div className="login-form">
                    <p>{this.props.formType}</p>
                    <form onSubmit={this.handleSubmit}>
                        <Link to={`/signup`}>Continue With Email</Link><br/>
                        <input type="text" onChange={this.update('email')} value={this.state.email} />
                        <br />
                        <input type="password" onChange={this.update('password')} value={this.state.password} />
                        <br />
                        <input type="submit" value={this.props.formType} />
                    </form>
                </div>
            </div>
        );
    }
}



export default LoginForm;