import React from 'react';
import { connect } from 'react-redux';
import { updateAnswer, requestAnswer } from '../../actions/answer_actions';
// import AnswerEditForm from './answer_edit_form';
import AnswerForm from './answer_form';

const msp = (state, ownProps) => {
    debugger
    const defaultAnswer = { body: '', }
    // const answer = state.entities.answers[ownProps.match.params.answerId] || defaultAnswer;
    const answer = state.entities.answers[ownProps.answerId] || defaultAnswer;
    
    
    return ({
        answer,
        formType: 'edit-form',
        currentUser: state.entities.users[state.session.id],
        toggle: ownProps.toggleEdit,
    })
}

const mdp = dispatch => {
    return ({
        requestAnswer: (id) => dispatch(requestAnswer(id)),
        action: (answer) => dispatch(updateAnswer(answer))
    })
}

class AnswerEditForm extends React.Component {
    componentDidMount() {
        // this.props.requestAnswer(this.props.match.params.answerId)
        this.props.requestAnswer(this.props.answer.id)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.answer.id != this.props.answerId) {
            this.props.requestAnswer(this.props.answerId);
        }
    }

    render() {
        // const { action, formType, answer } = this.props;
        return (
            // <AnswerEditForm
            <AnswerForm
                action={this.props.action}
                formType={this.props.formType}
                answer={this.props.answer}
                currentUser={this.props.currentUser}    
                toggle={this.props.toggle}
            />
        );



    }
}

export default connect(msp, mdp)(AnswerEditForm);
// export default connect(msp, mdp)(AnswerEditForm);