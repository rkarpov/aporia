import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AnswerEditContainer from './answer_edit_container';
 


class AnswerIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { dropdown: false };
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit(e) {
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
                <AnswerEditContainer
                    toggleEdit={this.toggleEdit}
                    answerId={this.props.answer.id}
                />
        }

        return (
            <div className="dropdown">
                <div className="answer-index-container">
                    <a className="edit-answer-button" onClick={this.toggleEdit} type="text">Edit</a>
                    <button className="delete-answer-button" onClick={() => this.props.deleteAnswer(this.props.answer.id)}>
                        Delete
                    </button>
                </div>
                {dropdown}
            </div>
        );
    }

    render() {
        let authorInitials = ''
        let author;
        if (this.props.answer && this.props.answer.authorFirstName) {
            author = this.props.answer.authorFirstName + ' ' + this.props.answer.authorLastName
            let authorName = author.split(' ')
            authorInitials += authorName[0][0] + authorName[1][0];
            authorInitials = authorInitials.toUpperCase();
        } else if (this.props.answer) {
            author = this.props.currentUser.first_name + this.props.currentUser.last_name;
            authorInitials += this.props.currentUser.first_name[0] + this.props.currentUser.last_name[0];
            authorInitials = authorInitials.toUpperCase();
        }
        let date;
        date = this.props.answer.date || new Date().toDateString();

        return(
            <li className="answer-item-container">
                <div className="pleasework">
                    <div className="profile-index-container">
                        <p className="avatar-initials" type="text">
                            {authorInitials}
                        </p>
                    </div>
                    <div>
                        <p className="authorname">{author}</p>
                        <p>Answered {date}</p>
                    </div>
                </div>
                <div className="answer-body-container">
                    <p className="answer-body testing">{this.props.answer.body}</p>
                </div>

                <div hidden={this.props.answer.author_id === this.props.currentUser.id ? null : "hidden"} >
                    {this.dropdown()}
                </div>
            </li>
        )   
    }
}

export default withRouter(AnswerIndexItem);