import React from 'react';
import { connect } from 'react-redux';
import { requestQuestions, deleteQuestion } from '../../actions/question_actions';
import QuestionIndex from './question_index'
import { openModal } from '../../actions/modal_actions';

const msp = state => {
    return {
        questions: Object.values(state.entities.questions)
    }
}

const mdp = dispatch => {
    return {
        requestQuestions: () => dispatch(requestQuestions()),
        deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
        openModal: (modal) => dispatch(openModal(modal)),
    }
}

export default connect(msp, mdp)(QuestionIndex)