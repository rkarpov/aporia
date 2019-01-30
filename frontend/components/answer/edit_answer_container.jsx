import { connect } from 'react-redux';
import { fetchQuestion, fetchAnswer } from '../../actions/question_actions';
import { updateAnswer } from '../../actions/answer_actions';
import AnswerForm from './answer_form';

const msp = (state, ownProps) => {
    return ({
        formType: 'editAnswer',
        answer: state.answers[ownProps.match.params.answerId],
        currentUser: state.entities.users[state.session.id],
    })
}

const dsp = dispatch => {
    return ({
        // fetchQuestion: (id) => dispatch(fetchQuestion(id)),
        fetchAnswer: (id) => dispatch(fetchAnswer(id)),
        action: (answer) => dispatch(updateAnswer(answer))
    })
}

export default connect(msp, dsp)(AnswerForm);