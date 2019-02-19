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
        if (this.props.pageType === 'Update') {
            this.props.toggleEdit();
        } else { this.setState({body: ''}) }
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
            <form className={`comment-${this.props.pageType}`} onSubmit={this.handleSubmit}>
                    <div className="profile-comment-index-container" hidden={this.props.pageType === 'Update' ? "hidden" : null}>
                        <p className="avatar-initials" type="text">{initials}</p>
                    </div>
               
                    <textarea
                        className="comment-input-field"
                        placeholder="Add a comment..."
                        onChange={this.update('body')}
                        value={this.state.body}>
                    </textarea>
   
                    <a 
                        hidden={this.props.pageType === 'Update' ? null : "hidden"}
                        className="cancel-comment"
                        onClick={this.props.toggleEdit}
                        type="text"
                    >Cancel</a>
                    <input className={`${this.props.pageType}-comment-button`} type="submit" value={this.props.pageType === 'Update' ? "Update" : "Submit Comment"} />
            </form>
        )
    }

}

export default withRouter(CommentForm);