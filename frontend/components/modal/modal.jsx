import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateQuestionContainer from '../question/create_question_container';
import EditQuestionContainer from '../question/edit_question_container';
import CreateTopicContainer from '../topic/create_topic_container';

const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal.modal || modal) {
        case 'createQuestion':
            component = <CreateQuestionContainer />;
            break;
        case 'editQuestion':
            component = <EditQuestionContainer 
            questionId={modal.questionId}
            />
            break;
        case 'createTopic':
            component = <CreateTopicContainer 
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