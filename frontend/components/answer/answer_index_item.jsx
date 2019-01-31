import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import EditAnswerContainer from './edit_answer_container';
 


class AnswerIndexItem extends React.Component {
    constructor(props) {
        super(props)
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

    return(
        <li className="answer-item-container">
            <div className="pleasework">
                <div className="profile-index-container">
                    <p className="avatar-initials" type="text">
                        {authorInitials}
                    </p>
                </div>
                <p className="authorname">{author}</p>
            </div>
            <div className="answer-body-container">
                <p className="answer-body testing">{this.props.answer.body}</p>
            </div>
            {/* {<EditAnswerContainer />} */}
            {/* <Link className="edit-answer-button" to={`/answers/${props.answer.id}/edit`}>Edit</Link> */}
            <Link to={`/answers/${this.props.answer.id}/edit`} className="edit-answer-button" >Edit</Link>
            {/* <EditAnswerContainer /> */}
            <button className="delete-answer-button" onClick={ () => this.props.deleteAnswer(this.props.answer.id)}>
                Delete
            </button>
        </li>
    )   
    }
}

export default withRouter(AnswerIndexItem);