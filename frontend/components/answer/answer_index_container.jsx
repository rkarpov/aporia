import { connect } from 'react-redux';
// import AnswerIndexItem from './answer_index_item';
import AnswerIndex from './answer_index';
import { requestAnswers, deleteAnswer } from '../../actions/answer_actions';

// const getAnswersByQuestionId = state => {
//     const answers = {};
//     const questions = Object.values(state.entities.questions);
//     questions.forEach((question) => {
//         answers[question_id] = question.answers.id.map((id) => {
//             return state.entities.answers[id];
//         });
//     });
//     return answers;
// };

// const allTodos = ({ todos }) => Object.keys(todos).map(id => todos[id]);

const answersByQuestionId = (state, ownProps) => {
    const answers = [];
    Object.keys(state.entities.answers).forEach(answerId => {
        if (state.entities.answers[answerId].question_id === ownProps.questionId) answers.push(state.entities.answers[answerId])
    })
    return answers;
};


const msp = (state, ownProps) => {
    return ({
        questionId: ownProps.questionId,
        answers: answersByQuestionId(state, ownProps),
        currentUser: state.entities.users[state.session.id]
                // author: state.entities.questions.author
    })
}

const mdp = dispatch => {
    return {
        // action: (answer) => dispatch(updateAnswer(answer)),
        // requestAnswers: (questionId) => dispatch(requestAnswers(questionId)),
        deleteAnswer: (answerId) => dispatch(deleteAnswer(answerId))
    }
}

export default connect(msp, mdp)(AnswerIndex);