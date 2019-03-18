import React from 'react';
import { connect } from 'react-redux';
import { deleteQuestion } from '../../actions/question_actions';
import { requestTopic, deleteTopic, requestTopics } from '../../actions/topic_actions';
import { requestAnswers } from '../../actions/answer_actions';
import { requestComments } from '../../actions/comment_actions';
import TopicShow from './topic_show';
import { openModal } from '../../actions/modal_actions';
import { createQuestionVote } from '../../actions/vote_actions';


const msp = (state, ownProps) => {
    const questions = Object.values(state.entities.questions) || [];

    let topic = { id: 'none', description: '' };
    const allTopics = Object.values(state.entities.topics);
    allTopics.forEach(topicItem => {
        if (topicItem.description === ownProps.match.params.description) {
        topic = topicItem;
        }
    })
        
    return {
        questions: questions,
        pageType: 'showQuestionTopic',
        match: ownProps.match,
        topic: topic,
        topicId: topic.id,
        currentUser: state.entities.users[state.session.id],
    }
};

const mdp = dispatch => ({
    deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
    requestAnswers: (questionId) => dispatch(requestAnswers(questionId)),
    requestComments: () => dispatch(requestComments()),
    requestTopic: (id) => dispatch(requestTopic(id)),
    deleteTopic: () => dispatch(deleteTopic()),
    requestTopics: () => dispatch(requestTopics()),
    openModal: (modal) => dispatch(openModal(modal)),
    createQuestionVote: (vote) => dispatch(createQuestionVote(vote)),
});

export default connect(msp, mdp)(TopicShow)