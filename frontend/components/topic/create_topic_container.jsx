import { connect } from 'react-redux';
import TopicForm from './topic_form';
import { createTopic } from '../../actions/topic_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {

    return {
        topic: { description: "" },
        formType: 'Add Topic',
        currentQuestion: ownProps.question,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        action: (topic) => dispatch(createTopic(topic)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicForm);
