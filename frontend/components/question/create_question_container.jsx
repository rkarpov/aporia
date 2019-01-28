import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { createQuestion } from '../../actions/question_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  
  return {
    question: { body: "",  author_id: state.session.id },
    formType: 'createQuestion',
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: (question) => dispatch(createQuestion(question)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
