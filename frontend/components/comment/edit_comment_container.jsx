import React from 'react';
import { connect } from 'react-redux';
import { updateComment, requestComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const msp = (state, ownProps) => {
    const defaultComment = { body: '', }
    const comment = state.entities.comments[ownProps.commentId] || defaultComment;
    return ({
        comment,
        pageType: 'Update',
        currentUser: state.entities.users[state.session.id],
        toggleEdit: ownProps.toggleEdit,
    })
}

const mdp = dispatch => {
    return ({
        requestComment: (id) => dispatch(requestComment(id)),
        action: (comment) => dispatch(updateComment(comment))
    })
}

class CommentEditForm extends React.Component {
    componentDidMount() {
        this.props.requestComment(this.props.comment.id)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.comment.id != this.props.commentId) {
            this.props.requestComment(this.props.commentId);
        }
    }

    render() {
        return (
            <CommentForm
                action={this.props.action}
                pageType={this.props.pageType}
                comment={this.props.comment}
                currentUser={this.props.currentUser}
                toggleEdit={this.props.toggleEdit}
            />
        );



    }
}

export default connect(msp, mdp)(CommentEditForm);
