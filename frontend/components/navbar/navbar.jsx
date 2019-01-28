import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends React.Component {

    render(){
    
        return (
            <header className="navbar-container">
                
                <h1 className="app-title">
                    Aporia
                </h1>

                {/* <Link to="/index">Home</Link> */}
                <Link exact to="/"
                    // activeClassName="selected"
                    className="nav-home-icon">Home</Link>
                <Link className="nav-answer-icon" to="/index">Answer</Link>

                <div className="app-search-bar-container">
                    <textarea className="app-search-bar"> Search Aporia</textarea>
                </div>


                <div className="navbar-question-container">

                    <div className="profile-modal-container">
                        <p className="avatar-initials" type="text">FL</p>
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