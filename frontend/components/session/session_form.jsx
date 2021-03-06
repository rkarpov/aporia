import React from 'react';
import DemoFormContainer from './demo_form_container';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.credentials;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    renderErrors() {
        if (this.props.formType === 'Login'){
            return (
                <div className={`${this.props.formType}-errors`}>
                    <ul>
                        {this.props.errors.map((error, i) => (
                            <li key={`error-${i}`}>
                                {error}
                            </li>
                        ))}
                    </ul> 
                </div>
            );
        }
    }

    render() {
        return (
            <>
            <form className={`${this.props.formType}-form`} onSubmit={this.handleSubmit}>
                <h2 className="session-title">{this.props.formType}</h2>

                <div className={`${this.props.formType}-name-field`} >
                    <div hidden={this.props.formType === 'Sign Up' ? null : "hidden"}>
                        <label className="name-label"> FIRST NAME <br/>
                            <input className="username-text-box" type="text" onChange={this.update('first_name')} value={this.state.first_name} />
                        </label>
                    </div>

                    <div hidden={this.props.formType === 'Sign Up' ? null : "hidden"}>
                        <label className="name-label">  LAST NAME <br/>
                            <input className="username-text-box" type="text" onChange={this.update('last_name')} value={this.state.last_name} />
                        </label>
                    </div>
                </div>

                <div className="credentials-field">
                    <div>
                        <label className="signup-label" hidden={this.props.formType === 'Sign Up' ? null : "hidden"} >EMAIL
                        </label><br/>
                        <input 
                            className="session-text-box"
                            type="text" onChange={this.update('email')}
                            value={this.state.email}
                            placeholder={this.props.formType === 'Login' ? " Email" : null}
                            />
                    </div>
                    <div>
                        <label className="signup-label" hidden={this.props.formType === 'Sign Up' ? null : "hidden"}>PASSWORD
                        </label><br/>
                        <input
                            className="session-text-box"
                            type="password" onChange={this.update('password')}
                            value={this.state.password}
                            placeholder={this.props.formType === 'Login' ? " Password" : null}
                            />
                    </div>

                    <p className="signup-agreement" hidden={this.props.formType === 'Sign Up' ? null : "hidden"}>
                        By clicking "Sign Up" you indicate that you have read and
                        agree to the Terms of Service and Privacy Policy.
                    </p>
                
                    <div className={`${this.props.formType}-button-container`}>
                        <input className={`${this.props.formType}-button`} type="submit" value={this.props.formType} />
                    </div>
                    <div hidden={this.props.formType === "Login" ? null : "hidden"}>
                        <DemoFormContainer />
                    </div>
            
                </div>
                    {this.props.errors ? this.renderErrors() : null}
            </form>
            </>
        );
    }

}

export default SessionForm;
