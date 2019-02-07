import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import EditCommentContainer from './edit_comment_container'; 
const ClickOutHandler = require('react-onclickout');


class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { dropdown: false, options: false };
        this.toggleEdit = this.toggleEdit.bind(this);

        this.toggleOptions = this.toggleOptions.bind(this);
        this.onClickOut = this.onClickOut.bind(this);
    }

    toggleEdit(e) {
        e.preventDefault();
        this.setState({
            dropdown: !this.state.dropdown,
            options: !this.state.options
        });
    }

    dropdown() {
        let initials = ''
        initials += this.props.currentUser.first_name[0] + this.props.currentUser.last_name[0];
        initials = initials.toUpperCase();

        let dropdown;
        if (this.state.dropdown) {
            dropdown =
                <EditCommentContainer
                    toggleEdit={this.toggleEdit}
                    commentId={this.props.comment.id}
                />
        }

        return (
            <div className="dropdown">
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
                            onClick={this.toggleEdit}
                        >Edit Comment</button>
                        <button
                            className="dropdown-item"
                            onClick={() => this.props.deleteComment(this.props.comment.id)}
                        >Delete Comment </button>
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
        if (this.props.comment && this.props.comment.authorFirstName) {
            author = this.props.comment.authorFirstName + ' ' + this.props.comment.authorLastName
            let authorName = author.split(' ')
            authorInitials += authorName[0][0] + authorName[1][0];
            authorInitials = authorInitials.toUpperCase();
        } else if (this.props.comment) {
            author = this.props.currentUser.first_name + this.props.currentUser.last_name;
            authorInitials += this.props.currentUser.first_name[0] + this.props.currentUser.last_name[0];
            authorInitials = authorInitials.toUpperCase();
        }
        let date;
        date = this.props.comment.date || new Date().toDateString();

        return (
            <li className="comment-item-container">
                <div className="pleasework">
                    <div className="profile-index-container">
                        <p className="avatar-initials" type="text">
                            {authorInitials}
                        </p>
                    </div>
                    <div>
                        <p className="comment-authorname">{author}</p>
                        <p>{date}</p>
                    </div>
                    <div hidden={this.props.comment.author_id === this.props.currentUser.id ? null : "hidden"} >
                    </div>
                    <div className="comment-options-container" hidden={this.props.currentUser.id === this.props.comment.author_id ? null : "hidden"}>
                        {this.options()}
                    </div>
                </div>
                <div className="comment-body-container" hidden={this.state.dropdown ? "hidden" : null}>
                    <p className="comment-body testing">{this.props.comment.body}</p>
                </div>
                <div hidden={this.props.comment.author_id === this.props.currentUser.id ? null : "hidden"} >
                    {this.dropdown()}
                </div>
            </li>
        )
    }
}

export default withRouter(CommentIndexItem);