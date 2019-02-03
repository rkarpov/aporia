import React from 'react';
import { connect } from 'react-redux';
import { requestQuestions } from '../../actions/question_actions';
// import usersQuestionsIndex from './users_questions_index'
import QuestionIndex from '../question/question_index';
import{ openModal } from '../../actions/modal_actions';

const msp = state => {
    return {
        pageType: 'userContent',
        questions: Object.values(state.entities.questions),
        currentUser: state.entities.users[state.session.id],
    }
}

const mdp = dispatch => {
    return {
        requestQuestions: () => dispatch(requestQuestions()),
        deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
        openModal: (modal) => dispatch(openModal(modal)),
    }
}

// export default connect(msp, mdp)(usersQuestionsIndex)
export default connect(msp, mdp)(QuestionIndex)