import merge from 'lodash/merge';
import { RECEIVE_TOPICS, RECEIVE_TOPIC, REMOVE_TOPIC } from '../actions/topic_actions';

const topicsReducer = ( oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_TOPICS: 
            return merge(newState, action.topics);
        case RECEIVE_TOPIC:
            debugger
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
        default:
            return oldState;
    }
}

export default topicsReducer;