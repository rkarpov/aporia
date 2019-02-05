import React from 'react';
import { connect } from 'react-redux';
import { requestQuestions } from '../../actions/question_actions';
// import usersQuestionsIndex from './users_questions_index'
import QuestionIndex from '../question/question_index';
import{ openModal } from '../../actions/modal_actions';

import ContentIndex from '../content/content_index';

const msp = state => {
    return {
        pageType: 'Your Questions',
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
export default connect(msp, mdp)(ContentIndex)




// const msp = state => {

//     const currentUser = state.entities.users[state.session.id];
//     let questions = [];
//     debugger

//     if (Object.entries(state.entities.questions).length !== 0) {
//         let allQs = Object.values(state.entities.questions);
//         allQs.forEach(question => {
//             if (question.authorId === currentUser.id) {
//                 questions.push(questions)
//             }
//         });

//         return {
//             pageType: 'userQuestions',
//             questions,
//             currentUser
//             // questions: Object.values(state.entities.questions),
//             // currentUser: state.entities.users[state.session.id],
//         }
//     } else {
//         return {
//             pageType: 'userQuestions',
//             questions,
//             currentUser
//         }
//     }
// }

// const mdp = dispatch => {
//     return {
//         requestQuestions: () => dispatch(requestQuestions()),
//         deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
//         openModal: (modal) => dispatch(openModal(modal)),
//     }
// }

// export default connect(msp, mdp)(QuestionIndex)