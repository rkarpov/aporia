import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.comment;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
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

        return (
            <form className="answer-form" onSubmit={this.handleSubmit}>
                <div className="add-answer-header-container">
                    {/* <div className="current-user-container"> */}
                    <div className="profile-index-container">
                        <p className="avatar-initials" type="text">{initials}</p>
                    </div>
                    <p className="index-username">{username}</p>
                    {/* </div> */}
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
                    <a className="cancel-answer" onClick={this.props.toggle} type="text">Cancel</a>
                    <input className="add-answer-button" type="submit" value={this.props.formType === 'edit-form' ? "Update" : "Submit"} />
                </footer>
            </form>
        )
    }

}

export default withRouter(CommentForm);