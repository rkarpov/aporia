import React from 'react';
import { connect } from 'react-redux';
import { requestQuestions, deleteQuestion } from '../../actions/question_actions';
import QuestionIndex from './question_index'
import { openModal } from '../../actions/modal_actions';

const msp = state => {
    debugger
    return {
        questions: Object.values(state.entities.questions),
        currentUser: state.entities.users[state.session.id],
    }
}

const mdp = dispatch => {
    debugger
    return {
        requestQuestions: () => dispatch(requestQuestions()),
        deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
        openModal: (modal) => dispatch(openModal(modal)),
    }
}

export default connect(msp, mdp)(QuestionIndex)