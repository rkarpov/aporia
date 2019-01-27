// import React from 'react';
// import { connect } from 'react-redux';
// import { fetchQuestion, updateQuestion } from '../../actions/question_actions'
// import QuestionForm from './question_form';


// const msp = (state, ownProps) => ({
//     question: state.questions[ownProps.match.params.questionId]
// });

// const mdp = dispatch => ({
//     fetchQuestion: (id) => dispatch(fetchQuestion(id)),
//     action: (question) => dispatch(updateQuestion(question))
// });

// class EditQuestionForm extends React.Component {
//     componentDidMount() {
//         this.props.fetchQuestion(this.props.match.params.questionId)
//     }

//     render() {
//         const { action, formType, question } = this.props;
//         return (
//             <QuestionForm
//                 action={action}
//                 formType={formType}
//                 question={question} />
//         );
//     }
// }


// export default connect(msp, mdp)(EditQuestionForm);