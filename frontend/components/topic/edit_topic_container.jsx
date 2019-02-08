// import React from 'react';
// import { connect } from 'react-redux';
// import { updateTopic, requestTopic } from '../../actions/topic_actions';
// import TopicForm from './topic_form';
// import { openModal, closeModal } from '../../actions/modal_actions';

// const msp = (state, ownProps) => {
//     const defaultTopic = { description: '', }
//     const topic = state.entities.topics[ownProps.topicId] || defaultTopic;

//     return ({
//         topic,
//         formType: 'Edit Topic',
//     })
// }

// const mdp = dispatch => {
//     return ({
//         requestTopic: (id) => dispatch(requestTopic(id)),
//         action: (comment) => dispatch(updateTopic(comment)),
//         closeModal: (modal) => dispatch(closeModal(modal)),
//     })
// }

// class TopicEditForm extends React.Component {
//     componentDidMount() {
//         this.props.requestTopic(this.props.topic.id)
//     }

//     componentDidUpdate(prevProps) {
//         if (prevProps.topic.id != this.props.topicId) {
//             this.props.requestTopic(this.props.topicId);
//         }
//     }

//     render() {
//         return (
//             <TopicForm
//                 action={this.props.action}
//                 pageType={this.props.pageType}
//                 topic={this.props.topic}
//                 // toggleEdit={this.props.toggleEdit}
//             />
//         );

//     }
// }

// export default connect(msp, mdp)(TopicEditForm);
