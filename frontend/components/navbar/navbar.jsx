import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// npm install react-onclickout --save
const ClickOutHandler = require('react-onclickout');

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropdown: false };
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.onClickOut = this.onClickOut.bind(this);
    }

    // event listener for clicking outside <ClickOutHandler/> component
    onClickOut(e) {
        if (this.state.dropdown) {
            this.setState({
                dropdown: !this.state.dropdown
            });
        }
    }

    toggleDropdown(e) {
        e.preventDefault();
        this.setState({
            dropdown: !this.state.dropdown
        });
    }

    dropdown() {
        let initials = ''
        initials += this.props.currentUser.first_name[0] + this.props.currentUser.last_name[0];
        initials = initials.toUpperCase();

        let dropdown;
        if (this.state.dropdown) {
            dropdown = 
                <div className="dropdown-content" >
                    <div className="dropdown-items-list">

                    <Link className="dropdown-item" to="/api/content">Your Content</Link>
                    <button className="dropdown-item" onClick={() => this.props.logout()}>Logout</button>
                    </div>
                </div>
        }

        return (
            // wrap Clickout component around the dropdown items
            <ClickOutHandler onClickOut={this.onClickOut}>
            <div className="dropdown">
                <div className="profile-modal-container">
                    <a onClick={this.toggleDropdown} className="navbar-avatar-initials" type="text">{initials}</a>
                </div>
                {dropdown}
            </div>
            </ClickOutHandler>
        );
    }

    render(){
    
        return (
            <header className="navbar-container">
                
                <h1 className="app-title">
                    Aporia
                </h1>

                {/* <Link to="/index">Home</Link> */}
                <div className="navbar-icon-container">
                    <img className="nav-news-svg" src={window.newsIcon} />

                    <Link to="/"
                        // activeClassName="selected"
                        className="nav-home-icon">Home</Link>
                </div>

                <div className="navbar-icon-container">
                    <img className="nav-answer-svg" src={window.answerIcon} />
                    <Link className="nav-answer-icon" to="/index">Answer</Link>
                </div>

                <div className="app-search-bar-container">
                    <img className="search-icon" src={window.searchIcon} />
                    <textarea className="app-search-bar" placeholder="Search Aporia"></textarea>
                </div>


                <div className="navbar-question-container">
                    {this.dropdown()}
                    {/* <div className="profile-modal-container"> */}
                        {/* <p className="avatar-initials" type="text">{initials}</p> */}
                        {/* <button onClick={ () => this.props.logout()}>Logout</button> */}
                    {/* </div> */}

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

