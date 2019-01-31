import React from 'react';
import { connect } from 'react-redux';
import { requestQuestions } from '../../actions/question_actions';
import QuestionIndex from '../question/question_index';

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
    }
}

export default connect(msp, mdp)(QuestionIndex)