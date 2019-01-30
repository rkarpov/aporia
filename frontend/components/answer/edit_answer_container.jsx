import React from 'react';
import { connect } from 'react-redux';
import { updateAnswer, requestAnswer } from '../../actions/answer_actions';
import AnswerEditForm from './answer_edit_form';


const msp = (state, ownProps) => {
    const defaultAnswer = { body: '', id: ownProps.match.params.answerId}
    const answer = state.entities.answers[ownProps.match.params.answerId] || defaultAnswer;
    
    
    return ({
        answer,
        formType: 'editAnswer',
        currentUser: state.entities.users[state.session.id],
    })
}

const mdp = dispatch => {
    // debugger
    return ({
        requestAnswer: (id) => dispatch(requestAnswer(id)),
        action: (answer) => dispatch(updateAnswer(answer))
    })
}

// class EditAnswerContainer extends React.Component {
//     // componentWillMount(){
//     //     requestAnswer(this.props.match.params.answerId)
//     // }

//     componentDidMount() {
//         debugger
//         this.props.requestAnswer(this.props.match.params.answerId)
//     }

//     componentDidUpdate(prevProps) {
//         debugger
//         if (prevProps.answer.id != this.props.match.params.answerId) {
//             this.props.requestAnswer(this.props.match.params.answerId);
//         }
//     }

//     render() {
//         const { action, formType, answer } = this.props;
//         debugger
//         return (
//             <AnswerEditForm
//                 action={action}
//                 formType={formType}
//                 answer={answer} />
//         );



//     }
// }

// export default connect(msp, mdp)(EditAnswerContainer);
export default connect(msp, mdp)(AnswerEditForm);