import React from 'react';
import { connect } from 'react-redux';
import { deleteQuestion, requestQuestions } from '../../actions/question_actions';
import { requestAnswers } from '../../actions/answer_actions';
import { requestComments } from '../../actions/comment_actions';
import { requestTopics } from '../../actions/topic_actions';
import { createQuestionVote } from '../../actions/vote_actions';
import { openModal } from '../../actions/modal_actions';
import QuestionIndex from './question_index';

const msp = (state, ownProps) => {
    let questions = [];
    const defaultQuestion = state.entities.questions[ownProps.match.params.questionId] ||
        // assign question dummy id of -1 until component mounts after 1st life cycle
        { id: -1, body: '', upVoterIds: [], downVoterIds: [] }
    questions.push(defaultQuestion);
    return {
        match: ownProps.match,
        questions: questions,
        pageType: 'showQuestion',
        questionId: ownProps.match.params.questionId,
        currentUser: state.entities.users[state.session.id],
    }
};

const mdp = dispatch => {
    return ({
        requestQuestions: () => dispatch(requestQuestions()),
        deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
        requestTopics: () => dispatch(requestTopics()),
        requestAnswers: (questionId) => dispatch(requestAnswers(questionId)),
        requestComments: () => dispatch(requestComments()),
        createQuestionVote: (vote) => dispatch(createQuestionVote(vote)),
        openModal: (modal) => dispatch(openModal(modal)),
    })
};

export default connect(msp, mdp)(QuestionIndex)
