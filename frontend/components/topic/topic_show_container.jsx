import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestion, deleteQuestion, requestQuestions } from '../../actions/question_actions';
// import { fetchTopic, deleteTopic, requestTopics } from '../../actions/topic_actions';
// import TopicShow from './topic_show';
import QuestionIndex from '../question/question_index';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
        // let topic;
    let topic = { id: -0, description: '' };
    const allTopics = Object.values(state.entities.topics);

        allTopics.forEach(topicItem => {
            if (topicItem.description === ownProps.match.params.description) {
            topic = topicItem;
            }
        })

    let allQuestions = Object.values(state.entities.questions);
    let questions = [];

    allQuestions.forEach(question => {
        if (question.topicIds.includes((topic.id)))  {
            questions.push(question);
        }
    })

    // let topic;
    // const defaultTopic = {}
    // topic = state.entities.topics[ownProps.match.params.topicId]
// 
    return {
        // topics: state.entities.topics,
        questions: questions,
        pageType: 'showQuestionTopic',
        // question: question,
        // topic: state.entities.topics[ownProps.match.params.topicId],
        topic: topic,
        // questionId: ownProps.match.params.questionId,
        topicId: topic.id,
        currentUser: state.entities.users[state.session.id],
    }

};

const mdp = dispatch => ({
    fetchQuestion: id => dispatch(fetchQuestion(id)),
    deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
    requestQuestions: () => dispatch(requestQuestions()),
    openModal: (modal) => dispatch(openModal(modal))
});

// export default connect(msp, mdp)(TopicShow)
export default connect(msp, mdp)(QuestionIndex)









// const msp = (state, ownProps) => {
    
//     // let questions;
//     const defaultQuestions = { [1]: {body: ""}}
//     // questions = state.entities.questions || defaultQuestions
    
//     let topic;
//     const defaultTopic = {}
//     topic = state.entities.topics[ownProps.match.params.topicId] || defaultTopic
// 
//     return {
//         // topics: state.entities.topics,
//         questions: defaultQuestions,
//         pageType: 'showQuestionTopic',
//         // question: question,
//         topic: topic,
//         // questionId: ownProps.match.params.questionId,
//         topicId: ownProps.match.params.topicId,
//         currentUser: state.entities.users[state.session.id],
//     }

// };

// const mdp = dispatch => ({
//     fetchQuestion: id => dispatch(fetchQuestion(id)),
//     deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
//     requestQuestions: () => dispatch(requestQuestions()),
//     // fetchTopic: id => dispatch(fetchTopic(id)),
//     // deleteTopic: (questionId) => dispatch(deleteTopic(questionId)),
//     // requestTopics: () => dispatch(requestTopics()),
//     // openModal: (modal) => dispatch(openModal(modal))
// });

// // export default connect(msp, mdp)(TopicShow)
// export default connect(msp, mdp)(QuestionIndex)
