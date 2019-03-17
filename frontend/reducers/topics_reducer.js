import merge from 'lodash/merge';
import { RECEIVE_TOPICS, RECEIVE_NEW_TOPIC, RECEIVE_TOPIC, REMOVE_TOPIC } from '../actions/topic_actions';
import { REMOVE_QUESTION } from '../actions/question_actions';

const topicsReducer = ( oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_TOPICS: 
            return merge(newState, action.topics);
        case RECEIVE_NEW_TOPIC:
            return merge(newState, { [action.topic.id]: action.topic });
        case RECEIVE_TOPIC:
            return merge(newState, { [action.payload.topic.id]: action.payload.topic });
        case REMOVE_TOPIC:
            const removedId = action.payload.question.id
            const qTopicIds = newState[action.payload.topic.id].questionIds
               let newarr = []
               qTopicIds.forEach(top => {
                   if (top != removedId) { newarr.push(top) }
               })
               newState[action.payload.topic.id].questionIds = newarr
            return newState;
        case REMOVE_QUESTION:
            action.question.topicIds.forEach(topicId => {
                if (newState[topicId].questionIds.length > 0) {
                    delete newState[topicId].questionIds[newState[topicId].questionIds.indexOf(action.question.id)]
                    newState[topicId].questionIds = newState[topicId].questionIds.filter(function(obj) { return obj });
                }
            })
            return newState;
        default:
            return oldState;
    }
}

export default topicsReducer;