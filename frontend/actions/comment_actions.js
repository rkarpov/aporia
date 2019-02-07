import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveAllComments = (comments) => {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}

const receiveComment = (comment) => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

const removeComment = (commentId) => {
    return {
        type: REMOVE_COMMENT,
        commentId
    }
}

export const requestComments = (questionId) => dispatch => {
    return (
        CommentApiUtil.fetchComments(questionId).then((comments) => dispatch(receiveAllComments(comments)))
    )
}

export const requestComment = (id) => dispatch => {
    return (
        CommentApiUtil.fetchComment(id).then((comment) => dispatch(receiveComment(comment)))
    )
}

export const createComment = (comment) => dispatch => {
    return (
        CommentApiUtil.createComment(comment).then((comment) => dispatch(receiveComment(comment)))
        // have error call back dispatching receive errors
    )
}

export const updateComment = (comment) => dispatch => {
    return (
        CommentApiUtil.updateComment(comment).then((comment) => dispatch(receiveComment(comment)))
    )
}

export const deleteComment = (commentId) => dispatch => {
    return (
        CommentApiUtil.deleteComment(commentId).then(() => dispatch(removeComment(commentId)))
    )
}