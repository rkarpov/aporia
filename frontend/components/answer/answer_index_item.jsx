import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AnswerEditContainer from './answer_edit_container';
import ReactQuill from 'react-quill';
import renderHTML from 'react-render-html'
import CreateCommentContiner from '../comment/create_comment_container';
import CommentIndexContainer from '../comment/comment_index_container';

const ClickOutHandler = require('react-onclickout');


class AnswerIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { dropdown: false, options: false };
        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleOptions = this.toggleOptions.bind(this);
        this.onClickOut = this.onClickOut.bind(this);
    }

    toggleEdit() {
        // e.preventDefault();
        this.setState({
            dropdown: !this.state.dropdown,
            options: false
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
            <div>
                {dropdown}
            </div>
        );
    }

    onClickOut(e) {
        if (this.state.options) {
            this.setState({
                options: !this.state.options
            });
        }
    }

    toggleOptions(e) {
        e.preventDefault();
        this.setState({
            options: !this.state.options
        })
    }

    options() {
        let options;
        if (this.state.options) {
            options =
            <div className="options-content" >
                <div className="dropdown-items-list">
                    <button
                        className="dropdown-item"
                        onClick={() => this.toggleEdit()}
                    >Edit Answer</button>
                    <button
                        className="dropdown-item"
                        onClick={() => this.props.deleteAnswer(this.props.answer.id)}
                    >Delete Answer</button>
                </div>
            </div>
        }

        return (
            <ClickOutHandler onClickOut={() => this.onClickOut()}>
                <div className="dropdown">
                    <div className="options-icon-container">
                        <img className="options-icon-svg" onClick={this.toggleOptions} src={window.optionsIcon} />
                    </div>
                    {options}
                </div>
            </ClickOutHandler>
        )
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
                <div hidden={this.props.answer.author_id === this.props.currentUser.id ? null : "hidden"} >
                    <div className="options-container">
                        {this.options()}
                    </div>
                </div>
                <div className="answer-body-container">
                    <span className="answer-body testing">{renderHTML(this.props.answer.body)}</span>
                </div>
                {this.dropdown()}
                <div hidden={this.props.match.url.includes("/index") ? "hidden" : null}>
                    <div>
                        <CreateCommentContiner
                            answerId={this.props.answer.id}
                            />
                    </div>
                    <div >
                        <CommentIndexContainer
                            answerId={this.props.answer.id}
                            />
                        <div className="comment-footer"></div>
                    </div>
                </div>
           
            </li>
        )   
    }
}

export default withRouter(AnswerIndexItem);