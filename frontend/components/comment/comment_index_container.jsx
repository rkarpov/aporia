import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { deleteComment } from '../../actions/comment_actions';

const commentsByAnswerId = (state, ownProps) => {
    const comments = [];
    Object.keys(state.entities.comments).forEach(answerId => {
        if (state.entities.comments[answerId].answer_id === ownProps.answerId) comments.push(state.entities.comments[answerId])
    })
    return comments;
};


const msp = (state, ownProps) => {
    return ({
        answerId: ownProps.answerId,
        comments: commentsByAnswerId(state, ownProps),
        currentUser: state.entities.users[state.session.id]
    })
}

const mdp = dispatch => {
    return {
        deleteComment: (commentId) => dispatch(deleteComment(commentId))
    }
}

export default connect(msp, mdp)(CommentIndex);