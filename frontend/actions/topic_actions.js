import * as topicApiUtil from '../util/topic_api_util';

export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';
export const RECEIVE_TOPIC = 'RECEIVE_TOPIC';
export const REMOVE_TOPIC = 'REMOVE_TOPIC';

const receiveAllTopics = (topics) => {

    return {
        type: RECEIVE_TOPICS,
        topics
    }
}

const receiveTopic = (topic) => {
    debugger
    return {
        type: RECEIVE_TOPIC,
        topic
    }
}

const removeTopic = (topicId) => {
    return {
        type: REMOVE_TOPIC,
        topicId
    }
}

export const requestTopics = () => dispatch => {
    return (
        topicApiUtil.fetchTopics().then((topics) => dispatch(receiveAllTopics(topics)))
    )
}

export const requestTopic = (id) => dispatch => {
    return (
        topicApiUtil.fetchTopic(id).then((topic) => dispatch(receiveTopic(topic)))
    )
}

export const createTopic = (topic) => dispatch => {
    debugger
    return (
        topicApiUtil.createTopic(topic).then((topic) => dispatch(receiveTopic(topic)))
        // have error call back dispatching receive errors
    )
}

export const updateTopic = (topic) => dispatch => {
    return (
        topicApiUtil.updateTopic(topic).then((topic) => dispatch(receiveTopic(topic)))
    )
}

export const deleteTopic = (topicId) => dispatch => {
    return (
        topicApiUtil.deleteTopic(topicId).then(() => dispatch(removeTopic(topicId)))
    )
}