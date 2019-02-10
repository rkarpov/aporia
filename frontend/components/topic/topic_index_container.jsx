import React from 'react';
import { connect } from 'react-redux';
import { requestTopics, deleteTopic } from '../../actions/topic_actions';
import TopicIndex from './topic_index'
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    debugger
    return {
        pageType: 'topicIndex',
        sourceType: ownProps.sourceType,
        topicIds: ownProps.topicIds,
        topics: Object.values(state.entities.topics),
    }
}

const mdp = dispatch => {
    return {
        requestTopics: () => dispatch(requestTopics()),
        deleteTopic: (topicId) => dispatch(deleteTopic(topicId)),
        openModal: (modal) => dispatch(openModal(modal)),
    }
}

export default connect(msp, mdp)(TopicIndex)