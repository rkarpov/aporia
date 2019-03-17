import React from 'react';
import { connect } from 'react-redux';
import { requestQuestions, deleteQuestion } from '../../actions/question_actions';
import { requestTopics } from '../../actions/topic_actions';
import { requestAnswers } from '../../actions/answer_actions';
import { requestComments } from '../../actions/comment_actions';
import { createQuestionVote } from '../../actions/vote_actions';

import QuestionIndex from './question_index';
import { openModal } from '../../actions/modal_actions';

const msp = (state) => {
    return {
        pageType: 'unansweredQuestions',
        questions: Object.values(state.entities.questions),
        currentUser: state.entities.users[state.session.id],
    }
}

const mdp = dispatch => {
    return {
        requestQuestions: () => dispatch(requestQuestions()),
        deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
        requestAnswers: () => dispatch(requestAnswers()),
        requestComments: () => dispatch(requestComments()),
        requestTopics: () => dispatch(requestTopics()),
        createQuestionVote: (vote) => dispatch(createQuestionVote(vote)),
        openModal: (modal) => dispatch(openModal(modal)),
    }
}

export default connect(msp, mdp)(QuestionIndex);