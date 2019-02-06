import React from 'react';
import { connect } from 'react-redux';
import { requestQuestions } from '../../actions/question_actions';
import { openModal } from '../../actions/modal_actions';

import ContentIndex from '../content/content_index';

const msp = state => {
    return {
        pageType: 'Your Answers',
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

export default connect(msp, mdp)(ContentIndex)