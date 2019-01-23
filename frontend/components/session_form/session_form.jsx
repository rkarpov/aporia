import React from 'react';

class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.formType;
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

    addNameCredential(){
        if (this.props.formType === 'Sign Up') {
            return(
                <div>
                    <label>
                        <input type="text" onChange={this.state.first_name} value={this.update('first_name')}/>
                        <input type="text" onChange={this.state.last_name} value={this.update('first_name')}/>
                    </label>
                </div>
            );
        }
    }

    render() {

        return(
            <div className="session-form">
                <h1>Aporia</h1>
                <h2>A Place to share knowledge and better understand the world</h2>

                <br/>
                
                <p>Continue With Email</p>
                <p>By clicking "Sign Up" you indicate that you have read and agree to the Terms of Service and Privacy Policy.</p>
   
                <div className="login-form">    
                    <p>{this.props.formType}</p>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            {/* {this.addNameCredential} */}
                            <input type="text" onChange={this.update('email')} value={this.state.email}/>
                            <br/>
                            <input type="password" onChange={this.update('password')} value={this.state.password}/>
                            <br/>
                            <input type="submit" value={this.props.formType}/>
                        </label>
                    </form>
                </div>
            </div>
        );
    }


}





export default SessionForm;