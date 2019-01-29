import merge from 'lodash/merge';
import { RECEIVE_ANSWERS, RECEIVE_ANSWER, REMOVE_ANSWER } from '../actions/answer_actions';

const answersReducer = ( oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_ANSWERS: 
            return merge(newState, action.answers);
        case RECEIVE_ANSWER: 
            return merge(newState, { [action.answer.id]: action.answer });
        case REMOVE_ANSWER: 
            delete newState[action.answerId];
            return newState;
        default:
            return oldState;
    }
}

export default answersReducer;