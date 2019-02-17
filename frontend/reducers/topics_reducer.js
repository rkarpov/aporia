import merge from 'lodash/merge';
import { RECEIVE_TOPICS, RECEIVE_TOPIC, REMOVE_TOPIC } from '../actions/topic_actions';

const topicsReducer = ( oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_TOPICS: 
            return merge(newState, action.topics);
        case RECEIVE_TOPIC:
            return merge(newState, { [action.topic.id]: action.topic });
        case REMOVE_TOPIC: 
            delete newState[action.topicId.topic_id];
            return newState;
        default:
            return oldState;
    }
}

export default topicsReducer;