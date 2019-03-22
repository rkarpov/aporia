import React from 'react';
import { connect } from 'react-redux';
import { requestQuestions, deleteQuestion } from '../../actions/question_actions';
import { requestTopic, deleteTopic, requestTopics } from '../../actions/topic_actions';
import { requestAnswers } from '../../actions/answer_actions';
import { requestComments } from '../../actions/comment_actions';
import QuestionIndex from '../question/question_index';
import { openModal } from '../../actions/modal_actions';
import { createQuestionVote } from '../../actions/vote_actions';


const msp = (state, ownProps) => {
    let topic = { id: -1, description: '' }
    const allTopics = Object.values(state.entities.topics);
    allTopics.forEach(topicItem => {
        if (topicItem.description === ownProps.match.params.description) {
        topic = topicItem;
        }
    })

    const allQuestions = Object.values(state.entities.questions);
    let questions = []
    allQuestions.forEach(question => {
        if (question.topicIds.includes(topic.id)) { questions.push(question) }
    });

    const defaultQuestion = [{ id: -1, body: '', upVoterIds: [], downVoterIds: [] }];
    if (questions.length === 0) { questions = defaultQuestion }

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
    requestQuestions: () => dispatch(requestQuestions()),
    deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
    requestAnswers: (questionId) => dispatch(requestAnswers(questionId)),
    requestComments: () => dispatch(requestComments()),
    requestTopic: (id) => dispatch(requestTopic(id)),
    deleteTopic: () => dispatch(deleteTopic()),
    requestTopics: () => dispatch(requestTopics()),
    openModal: (modal) => dispatch(openModal(modal)),
    createQuestionVote: (vote) => dispatch(createQuestionVote(vote)),
});

export default connect(msp, mdp)(QuestionIndex)