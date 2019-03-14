import merge from 'lodash/merge';
import { RECEIVE_ALL_QUESTIONS, RECEIVE_QUESTION, REMOVE_QUESTION } from '../actions/question_actions';
import { RECEIVE_QUESTION_VOTE, REMOVE_QUESTION_VOTE } from '../actions/vote_actions';
import { REMOVE_TOPIC } from '../actions/topic_actions';

const questionsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_QUESTIONS: 
            return merge(newState, action.questions);
        case RECEIVE_QUESTION : 
            return merge(newState, { [action.question.id]: action.question });
        case REMOVE_QUESTION: 
            delete newState[action.questionId];
            return newState;
        case RECEIVE_QUESTION_VOTE:
            // newState[action.payload.vote.questionId].votes = action.payload.vote.votes;
            return { ...newState, [action.payload.id]: action.payload };
        case REMOVE_TOPIC:
            // const questionTopicIds = newState[action.payload.question.id].topicIds
            const questionTopicIds = action.payload.question.topicIds
            const topicId = action.payload.topic.id
            // delete question.topicIds[topicId]
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