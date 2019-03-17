import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestion, deleteQuestion, requestQuestions } from '../../actions/question_actions';
import { requestAnswers } from '../../actions/answer_actions';
import { requestTopics } from '../../actions/topic_actions';
import { createQuestionVote } from '../../actions/vote_actions';
import { openModal } from '../../actions/modal_actions';
// import QuestionShow from './question_show';
import QuestionIndex from './question_index';

const msp = (state, ownProps) => {
    let questions;
    let question;
    const defaultQuestion = { body: '', upVoterIds: [], downVoterIds: [] }
    // question = state.entities.questions[ownProps.match.params.questionId] || defaultQuestion
    if (Object.values(state.entities.questions).length > 0) {
        questions = Object.values(state.entities.questions)
        question = state.entities.questions[ownProps.match.params.questionId]
    } else {
        questions = defaultQuestion;
        question = defaultQuestion;
    }
    return {
        match: ownProps.match,
        // questions: Object.values(state.entities.questions),
        questions: questions,
        pageType: 'showQuestion',
        question: question,
        questionId: ownProps.match.params.questionId,
        currentUser: state.entities.users[state.session.id],
    }
    // } else {
    //     return {
    //         questions: {},
    //         pageType: 'ignore',
    //         question: question,
    //         questionId: ownProps.match.params.questionId,
    //         currentUser: state.entities.users[state.session.id],
    //     }
    // }
};

const mdp = dispatch => {
    return ({
        fetchQuestion: id => dispatch(fetchQuestion(id)),
        deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
        requestQuestions: () => dispatch(requestQuestions()),
        createQuestionVote: (vote) => dispatch(createQuestionVote(vote)),
        openModal: (modal) => dispatch(openModal(modal)),
        requestTopics: () => dispatch(requestTopics()),
        requestAnswers: (questionId) => dispatch(requestAnswers(questionId)),
    })
};

// export default connect(msp, mdp)(QuestionShow)
export default connect(msp, mdp)(QuestionIndex)
