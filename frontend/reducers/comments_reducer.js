import merge from 'lodash/merge';
import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';

const commentsReducer = ( oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_COMMENTS: 
            return merge(newState, action.comments);
        case RECEIVE_COMMENT:
            return merge(newState, { [action.comment.id]: action.comment });
        case REMOVE_COMMENT:
            delete newState[action.commentId];
            return newState;
        default:
            return oldState;
    }
}

export default commentsReducer;