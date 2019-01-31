import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropdown: false };
        this.toggleDropdown = this.toggleDropdown.bind(this);
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
            dropdown = <button className="dropdown-content" onClick={() => this.props.logout()}>Logout</button>;
        }

        return (
            <div className="dropdown">
                <div className="profile-modal-container">
                    <a onClick={this.toggleDropdown} className="navbar-avatar-initials" type="text">{initials}</a>
                </div>
                {dropdown}
            </div>
        );
    }

    render(){
    
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

