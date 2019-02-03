import { connect } from 'react-redux';
import AnswerForm from './answer_form';
import { createAnswer } from '../../actions/answer_actions';

const msp = (state, ownProps) => {
    
    return ({
        answer: { 
            body: "", 
            author_id: state.session.id, 
            question_id: ownProps.questionId,
        },
        formType: 'answer-form',
        currentUser: state.entities.users[state.session.id],
        toggle: ownProps.toggleDropdown
    })
}

const mdp = dispatch => {
    return ({
        action: (answer) => dispatch(createAnswer(answer)),
    })
}

export default connect(msp, mdp)(AnswerForm);