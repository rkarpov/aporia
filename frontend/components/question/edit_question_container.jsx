import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestion, updateQuestion } from '../../actions/question_actions'
import QuestionForm from './question_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    return {
        question: state.entities.questions[ownProps.questionId],
        formType: 'Edit Question',
        currentUser: state.entities.users[state.session.id],
    }
};

const mdp = dispatch => ({
    fetchQuestion: (id) => dispatch(fetchQuestion(id)),
    action: (question) => dispatch(updateQuestion(question)),
    closeModal: (modal) => dispatch(closeModal(modal)),
});

class EditQuestionForm extends React.Component {
    componentDidMount() {
        this.props.fetchQuestion(this.props.questionId)
    }

    componentDidUpdate(prevProps){
        if (prevProps.question.id != this.props.questionId) {
            this.props.fetchQuestion(this.props.questionId);
        }   
    }

    render() {
        const { action, formType, question } = this.props;
        return (
            <QuestionForm
                action={action}
                formType={formType}
                question={question}
                closeModal={this.props.closeModal}
            />
        );
    }
}


export default connect(msp, mdp)(EditQuestionForm);