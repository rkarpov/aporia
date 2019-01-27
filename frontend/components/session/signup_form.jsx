import React from 'react';
import SessionForm from './session_form';

class SignupForm extends React.Component {
    render() {
        return (
            <SessionForm
                formType={this.props.formType}
                credentials={this.props.credentials}
                processForm={this.props.processForm}
                errors={this.props.errors}
                // signupErrors={this.props.signupErrors}
            />
        );
    }
}

export default SignupForm;


// import React from 'react';
// import { Link } from 'react-router-dom';

// class SignupForm extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = this.props.credentials;
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleSubmit(e) {
//         e.preventDefault;
//         this.props.processForm(this.state);
//     }

//     update(field) {
//         return (e) => {
//             this.setState({ [field]: e.target.value });
//         }
//     }

//     render() {
//         return (
//             <div className="signup-form">
//                 <h2>{this.props.formType}</h2>

//                 <form onSubmit={this.handleSubmit}>
//                     <label>FIRST NAME
//                         <input type="text" onChange={this.update('first_name')} value={this.state.first_name} />
//                     </label><br/>
//                     <label>LAST NAME
//                         <input type="text" onChange={this.update('last_name')} value={this.state.last_name} />
//                     </label><br/>
//                     <label>EMAIL
//                         <input type="text" onChange={this.update('email')} value={this.state.email} />
//                     </label><br/>
//                     <label>PASSWORD
//                         <input type="password" onChange={this.update('password')} value={this.state.password} />
//                     </label><br/>
//                     <input className="session-button" type="submit" value={this.props.formType} />
//                 </form>

//                 <p>By clicking "Sign Up" you indicate that you have read and agree to the Terms of Service and Privacy Policy.</p>
//             </div>
//         );
//     }

// }

// export default SignupForm;

