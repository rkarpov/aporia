import React from 'react';

class SessionForm extends React.Component {
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
                <div className={this.props.formType}>
                    <h2>{this.props.formType}</h2>

                    <form className="session-form-body" onSubmit={this.handleSubmit}>
                    
                    <div className="signup-username-fields">
                        <div hidden={this.props.formType === 'Sign Up' ? null : "hidden"}>
                            <label>FIRST NAME <br/>
                            <input type="text" onChange={this.update('first_name')} value={this.state.first_name} />
                            </label>
                        </div>

                        <div hidden={this.props.formType === 'Sign Up' ? null : "hidden"}>
                            <label>LAST NAME <br/>
                            <input type="text" onChange={this.update('last_name')} value={this.state.last_name} />
                            </label>
                        </div>
                    </div>

                        <div>
                            <label hidden={this.props.formType === 'Sign Up' ? null : "hidden"}>EMAIL
                            </label><br/>
                            <input type="text" onChange={this.update('email')} value={this.state.email} />
                        </div>

                        <div>
                            <label hidden={this.props.formType === 'Sign Up' ? null : "hidden"}>PASSWORD
                            </label><br/>
                            <input type="password" onChange={this.update('password')} value={this.state.password} />
                        </div>

                        <input className="session-button" type="submit" value={this.props.formType} />
                    </form>

                    <p className="signup-agreement" hidden={this.props.formType === 'Sign Up' ? null : "hidden"}>
                        By clicking "Sign Up" you indicate that you have read and
                         agree to the Terms of Service and Privacy Policy.
                    </p>
                </div>
            </div>
        );
    }

}

export default SessionForm;
