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
            return merge(newState, { [action.topic.id]: action.topic });
        case REMOVE_TOPIC: 
            debugger
            // delete newState[action.topicId.topic_id];
            // delete

            // before changing render to question payload
            // const removedId = action.payload.topic.question_id
            // const qTopicIds = newState[action.topicId.topic_id].questionIds
            // let newarr = []
            // qTopicIds.forEach(top => {
            //     if (top != removedId) { newarr.push(top) }
            // })
            // newState[action.topicId.topic_id].questionIds = newarr
            
            
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