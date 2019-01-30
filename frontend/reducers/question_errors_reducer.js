import { RECEIVE_QUESTION_ERRORS } from '../actions/question_actions';

export default (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_QUESTION_ERRORS:
            return action.errors;
        default:
            return oldState;
    }
};