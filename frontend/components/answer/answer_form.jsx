import React from 'react';
import { withRouter } from 'react-router-dom';

class AnswerForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.answer;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();        
        // const answer = Object.assign({}, this.state);
        this.props.action(this.state)
        // .then(this.setState(this.props.body))
    }

    update(field){
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    render(){
        let initials = ''
        let username;
        if (this.props.currentUser) {
            username = (this.props.currentUser.first_name + ' ' + this.props.currentUser.last_name);``
            initials += this.props.currentUser.first_name[0] + this.props.currentUser.last_name[0];
            initials = initials.toUpperCase();
        }

        return(
                <form className="answer-form" onSubmit={this.handleSubmit}>
                    <div className="add-answer-header-container">
                        {/* <div className="current-user-container"> */}
                            <div className="profile-index-container">
                                <p className="avatar-initials" type="text">{initials}</p>
                            </div>
                            <p className="index-username">{username}</p>
                        {/* </div> */}
                    </div>
                        <div className="enriched-text">
                            Enriched text options
                        </div>
                    <div className="answer-input-container">
                        <textarea
                        className="answer-input-field"
                            placeholder="Write your answer"
                            onChange={this.update('body')} 
                            value={this.state.body}>
                        </textarea>
                    </div>
                    
                    <footer className="add-answer-footer">
                        < input className="cancel-answer" onClick={() => this.props.closeDropDown()} type="submit" value="Cancel" />
                        <input className="add-answer-button" type="submit" value="Submit"/>
                    </footer>
                </form>
        )
    }

}

export default withRouter(AnswerForm);