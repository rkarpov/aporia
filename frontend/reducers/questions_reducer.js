import merge from 'lodash/merge';
import { RECEIVE_ALL_QUESTIONS, RECEIVE_QUESTION, REMOVE_QUESTION } from '../actions/question_actions';

const questionsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    // debugger
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_QUESTIONS: 
            return merge(newState, action.questions);
        case RECEIVE_QUESTION : 
            return merge(newState, { [action.question.id]: action.question });
        case REMOVE_QUESTION: 
            delete newState[action.questionId];
            return newState;
        default:
            return oldState;
    }
} 

export default questionsReducer;