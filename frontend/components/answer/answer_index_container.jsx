import { connect } from 'react-redux';
import AnswerIndex from './answer_index';
import { requestAnswers, deleteAnswer } from '../../actions/answer_actions';

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
    })
}

const mdp = dispatch => {
    return {
        deleteAnswer: (answerId) => dispatch(deleteAnswer(answerId))
    }
}

export default connect(msp, mdp)(AnswerIndex);