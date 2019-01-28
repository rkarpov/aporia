import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends React.Component {

    render(){
    
        let initials = ''
        initials += this.props.currentUser.first_name[0] + this.props.currentUser.last_name[0];
        initials = initials.toUpperCase();

        return (
            <header className="navbar-container">
                
                <h1 className="app-title">
                    Aporia
                </h1>

                {/* <Link to="/index">Home</Link> */}
                <Link to="/"
                    // activeClassName="selected"
                    className="nav-home-icon">Home</Link>
                <Link className="nav-answer-icon" to="/index">Answer</Link>

                <div className="app-search-bar-container">
                    <textarea className="app-search-bar" defaultValue=" Search Aporia"></textarea>
                </div>


                <div className="navbar-question-container">

                    <div className="profile-modal-container">
                        <p className="avatar-initials" type="text">{initials}</p>
                        <button onClick={ () => this.props.logout()}>Logout</button>
                    </div>

                    <button 
                        className="navbar-question-modal"
                        onClick={() => this.props.openModal('createQuestion')}
                        >Add Question</button>
                </div>

            </header>
        )
    }
}

export default Navbar;