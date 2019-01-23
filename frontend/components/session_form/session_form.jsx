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

    render() {

        return(
            <div className="session-form">
                <h1>Aporia</h1>
                <h2>A Place to share knowledge and better understand the world</h2>

                <br/>
                
                <div className="login-form">    
                    <p>{this.props.formType}</p>
                    <form onSubmit={this.handleSubmit}>
                        <label>
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