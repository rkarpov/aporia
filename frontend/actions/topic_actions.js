import * as topicApiUtil from '../util/topic_api_util';

export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';
export const RECEIVE_TOPIC = 'RECEIVE_TOPIC';
export const REMOVE_TOPIC = 'REMOVE_TOPIC';
export const RECEIVE_NEW_TOPIC = 'RECEIVE_NEW_TOPIC';

const receiveAllTopics = (topics) => {
    return {
        type: RECEIVE_TOPICS,
        topics
    }
}

const receiveNewTopic = (topic) => {
    return {
        type: RECEIVE_NEW_TOPIC,
        topic
    }
}

const receiveTopic = (payload) => {
    return {
        type: RECEIVE_TOPIC,
        payload
    }
}

const removeTopic = (payload) => {
    return {
        type: REMOVE_TOPIC,
        payload
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
    return (
        topicApiUtil.createTopic(topic).then((topic) => dispatch(receiveNewTopic(topic)))
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
        topicApiUtil.deleteTopic(topicId).then((payload) => dispatch(removeTopic(payload)))
    )
}