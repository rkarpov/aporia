import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestion, deleteQuestion, requestQuestions } from '../../actions/question_actions';
import QuestionShow from './question_show';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    let question;
    const defaultQuestion = {}
    question = state.entities.questions[ownProps.match.params.questionId] || defaultQuestion

    if (Object.values(state.entities.questions).length > 0) {
        return {
            questions: state.entities.questions,
            pageType: 'showQuestion',
            question: question,
            questionId: ownProps.match.params.questionId,
            currentUser: state.entities.users[state.session.id],
        }
    } else {
        return {
            questions: {},
            pageType: 'ignore',
            question: question,
            questionId: ownProps.match.params.questionId,
            currentUser: state.entities.users[state.session.id],
        }
    }
};

const mdp = dispatch => ({
    fetchQuestion: id => dispatch(fetchQuestion(id)),
    deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
    requestQuestions: () => dispatch(requestQuestions()),
    openModal: (modal) => dispatch(openModal(modal),)
});

export default connect(msp, mdp)(QuestionShow)
// export default connect(msp, mdp)(QuestionIndex)
