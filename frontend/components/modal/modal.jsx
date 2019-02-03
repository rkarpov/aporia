import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateQuestionContainer from '../question/create_question_container';
import EditQuestionContainer from '../question/edit_question_container';

// import LoginFormContainer from '../session_form/login_form_container';
// import SignupFormContainer from '../session_form/signup_form_container';

const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }
    debugger
    let component;
    switch (modal.modal || modal) {
        case 'createQuestion':
            component = <CreateQuestionContainer />;
            break;
        case 'editQuestion':
        debugger 
            component = <EditQuestionContainer 
            questionId={modal.questionId}
            />
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={ () => closeModal()}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);