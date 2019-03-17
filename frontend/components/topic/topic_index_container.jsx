import React from 'react';
import { connect } from 'react-redux';
import { requestTopics, deleteTopic } from '../../actions/topic_actions';
import { fetchQuestion, requestQuestions } from '../../actions/question_actions';
import TopicIndex from './topic_index'
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    const topics = Object.values(state.entities.topics) || [];
    return {
        pageType: 'topicIndex',
        sourceType: ownProps.sourceType,
        topicIds: ownProps.topicIds,
        topics: topics,
        questionId: ownProps.questionId,
    }
}

const mdp = dispatch => {
    return {
        requestTopics: () => dispatch(requestTopics()),
        deleteTopic: (topicId) => dispatch(deleteTopic(topicId)),
        openModal: (modal) => dispatch(openModal(modal)),
        // fetchQuestion: (id) => dispatch(fetchQuestion(id)),
        // requestQuestions: () => dispatch(requestQuestions())
    }
}

export default connect(msp, mdp)(TopicIndex)