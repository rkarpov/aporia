import merge from 'lodash/merge';
import { RECEIVE_ALL_QUESTIONS, RECEIVE_QUESTION, REMOVE_QUESTION } from '../actions/question_actions';
import { RECEIVE_QUESTION_VOTE } from '../actions/vote_actions';
import { REMOVE_TOPIC, RECEIVE_TOPIC } from '../actions/topic_actions';

const questionsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_QUESTIONS: 
            return merge(newState, action.questions);
        case RECEIVE_QUESTION : 
            return merge(newState, { [action.question.id]: action.question });
        case REMOVE_QUESTION: 
            delete newState[action.question.id];
            return newState;
        case RECEIVE_QUESTION_VOTE:
            return { ...newState, [action.payload.id]: action.payload };
        case RECEIVE_TOPIC:
            if (action.payload.questions) {
                return newState = action.payload.questions
            } else { return newState }
        case REMOVE_TOPIC:
            const questionTopicIds = action.payload.question.topicIds
            const topicId = action.payload.topic.id
            let newarr = []
            questionTopicIds.forEach(topId => {
                if (topId !== topicId) { newarr.push(topId) }
            })
            newState[action.payload.question.id].topicIds = newarr;
            return newState;
        default:
            return oldState;
    }
} 

export default questionsReducer;