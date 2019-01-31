import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class AnswerEditForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.answer
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // refactor code to have this edit form inside the edit container file, and pass props
    // to the answerForm. Include componentDidMount and componentDidUpdate in EditForm only
    // Afterwards, redo any tags for corresponding css classNames 
    componentDidMount() {
        this.props.requestAnswer(this.props.match.params.answerId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.answer.id != this.props.match.params.answerId) {
            this.props.requestAnswer(this.props.match.params.answerId);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
    }    

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    render() {
        let initials = ''
        let username;
        if (this.props.currentUser) {
            username = (this.props.currentUser.first_name + ' ' + this.props.currentUser.last_name); ``
            initials += this.props.currentUser.first_name[0] + this.props.currentUser.last_name[0];
            initials = initials.toUpperCase();
        }

        return(
            <div>
                <form className="edit-form" onSubmit={this.handleSubmit}> 
                    <div className="add-answer-header-container">
                        <div className="profile-index-container">
                            <p className="avatar-initials" type="text">{initials}</p>
                        </div>
                        <p className="index-username">{username}</p>
                    </div>
                    <div className="answer-input-container">
                        <div className="enriched-text">
                            Enriched text options
                        </div>
                        <textarea
                            className="answer-input-field" 
                            value={this.state.body}
                            onChange={this.update('body')}    
                        />
                    </div>
                    <footer className="add-answer-footer">
                        <input className="cancel-answer" onClick={() => this.props.closeDropDown()} type="submit" value="Cancel" />
                        {/* {/* <Link to="/" className="cancel-answer">Cancel</Link> */}
                        <input className="add-answer-button" type="submit" value="Submit" />
                    </footer>
                </form>
            </div>


        )
    }
}

export default AnswerEditForm;