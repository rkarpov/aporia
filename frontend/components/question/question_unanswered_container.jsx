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
    let question = { id: -1, body: '', upVoterIds: [], downVoterIds: [], answerAuthorIds: [] };
    let questions = Object.values(state.entities.questions) || [question];
    let unansweredQuestions = [];
    questions.forEach(question => {
        if (question.answerAuthorIds.length === 0) {
            unansweredQuestions.push(question);
        }
    })
    questions = unansweredQuestions
    return {
        pageType: 'unansweredQuestions',
        questions: questions,
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