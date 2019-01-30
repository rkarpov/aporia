import React from 'react';
import SessionForm from './session_form';

class LoginForm extends React.Component {
    render() {
        return (
            <SessionForm
                formType={this.props.formType}
                credentials={this.props.credentials}
                processForm={this.props.processForm}
                errors={this.props.errors}
            />
        );
    }
}

export default LoginForm;



// import React from 'react';
// import { Link } from 'react-router-dom';

// class LoginForm extends React.Component {
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
//             <div className="session-box-form">
//                 <div className="header">
//                 <h1 className="logo">Aporia</h1>
//                 <h4 className="session-description">A Place to share knowledge and better understand the world</h4>
//                 </div>
                
//                 <div className="login-form">
//                     <form onSubmit={this.handleSubmit}>
//                     <p>{this.props.formType}</p>
//                         {/* <Link to={`/signup`}>Continue With Email</Link><br/> */}
//                         <div className="login-input-text">
//                             <input type="text" onChange={this.update('email')} value={this.state.email} />
//                             <input type="password" onChange={this.update('password')} value={this.state.password} />
//                         </div>
//                         <input className="session-button" type="submit" value={this.props.formType} />
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }

// export default LoginForm;


