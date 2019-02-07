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
            <form className="comment-form" onSubmit={this.handleSubmit}>
         
                    {/* <div className="current-user-container"> */}
                    <div className="profile-comment-index-container">
                        <p className="avatar-initials" type="text">{initials}</p>
                    </div>
                    {/* <p className="index-username">{username}</p> */}
                    {/* </div> */}
             
               
              
                    <textarea
                        className="comment-input-field"
                        placeholder="Add a comment..."
                        onChange={this.update('body')}
                        value={this.state.body}>
                    </textarea>
   

                <footer className="add-comment-footer">
                    {/* <a className="cancel-answer" onClick={this.props.toggle} type="text">Cancel</a> */}
                    <input className="add-comment-button" type="submit" value={this.props.formType === 'edit-form' ? "Update" : "Submit Comment"} />
                </footer>
            </form>
        )
    }

}

export default withRouter(CommentForm);