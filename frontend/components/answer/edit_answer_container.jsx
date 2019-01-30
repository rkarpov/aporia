import React from 'react';
import { connect } from 'react-redux';
import { updateAnswer, fetchAnswer } from '../../actions/question_actions';
import AnswerForm from './answer_form';

const msp = (state, ownProps) => {
    // debugger
    return ({
        formType: 'editAnswer',
        answer: state.answers[ownProps.match.params.answerId],
        // currentUser: state.entities.users[state.session.id],
    })
}

const mdp = dispatch => {
    return ({
        // fetchQuestion: (id) => dispatch(fetchQuestion(id)),
        fetchAnswer: (id) => dispatch(fetchAnswer(id)),
        action: (answer) => dispatch(updateAnswer(answer))
    })
}

class EditReportForm extends React.Component {
    // componentWillMount(){
    //     fetchAnswer(this.props.match.params.answerId)
    // }

    componentDidMount() {
        this.props.fetchAnswer(this.props.match.params.answerId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.answer.id != this.props.match.params.answerId) {
            this.props.fetchAnswer(this.props.match.params.answerId);
        }
    }

    render() {
        const { action, formType, answer } = this.props;
        return (
            <AnswerForm
                action={action}
                formType={formType}
                answer={answer} />
        );
    }
}

export default connect(msp, mdp)(EditReportForm);