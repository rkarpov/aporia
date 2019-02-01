import { connect } from 'react-redux';
import AnswerForm from './answer_form';
// Actions
import { createAnswer } from '../../actions/answer_actions';

const msp = (state, ownProps) => {
    
    return ({
        answer: { 
            body: "", 
            author_id: state.session.id, 
            question_id: ownProps.questionId,
        },
        formType: 'CreateAnswer',
        currentUser: state.entities.users[state.session.id],
    })
}

const mdp = dispatch => {
    return ({
        action: (answer) => dispatch(createAnswer(answer)),
        // implement some toggle to open dropdown for answer form
    })
}

export default connect(msp, mdp)(AnswerForm);




// import { connect } from 'react-redux';
// import AnswerForm from './answer_form';
// // Actions
// import { createAnswer } from '../../actions/answer_actions';
// import { answersByQuestionId } from '../../reducers/selectors';


// const msp = (state, { question_id } ) => {
// // const msp = (state) => {
//     return ({
//         answers: answersByQuestionId(state, question_id),
//         formType: 'CreateAnswer',
//         body: "",
//         question_id,
//     })
// }

// const mdp = dispatch => {
//     return ({
//         // fetchQuestion: (id) => dispatch(fetchQuestion(id)),
//         action: (...args) => dispatch(createAnswer(...args)),
//         // action: (answer) => dispatch(createAnswer(answer))
//     })
// }

// export default connect(msp, mdp)(AnswerForm);