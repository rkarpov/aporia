// import React from 'react';
// import { Link } from 'react-router-dom';
// import QuestionIndexItem from '../question/question_index_item';
// import NavbarContainer from '../navbar/navbar_container';
// import TopicIndexContainer from './topic_index_container';

// class QuestionTopicIndex extends React.Component {

//     componentDidUpdate(prevProps) {
//         if (prevProps.topic.description != this.props.topic.description) {
//             this.props.requestTopic(this.props.topic.id);
//         }
//     }

//     render() {
//         let username = (this.props.currentUser.first_name + ' ' + this.props.currentUser.last_name);

//         let initials = ''
//         initials += this.props.currentUser.first_name[0] + this.props.currentUser.last_name[0];
//         initials = initials.toUpperCase();
       
//         const questions = this.props.questions.map(question => {
//             return <QuestionIndexItem
//                 key={`question-${question.id}`}
//                 question={question}
//                 deleteQuestion={this.props.deleteQuestion}
//                 currentUser={this.props.currentUser}
//                 pageType={this.props.pageType}
//                 openModal={this.props.openModal}
//                 createQuestionVote={this.props.createQuestionVote}
//             />
//         })
        
//         this.test = getState();
//         return (
//             <div className="index-main">
//                 <div className="index-header-container">
//                     <NavbarContainer />
//                 </div>

//                 <div className="index-body-container">
//                     <div className="index-body">
//                         <div className="feed-container">
//                             <div >
//                                 <p className="feed-header">Feed Topics</p>
//                                 <TopicIndexContainer
//                                     sourceType={"feedIndex"}
//                                 />
//                             </div>                           
//                         </div>

//                         <div className="index-page-container">
//                             <header
//                                 className="question-topic-container">
//                                 <h2
//                                     className="question-topic-description">
//                                     Questions by Topic: <p className="topic-p">{this.props.topic.description}</p>
//                                 </h2>
//                             </header>

//                             <div className="questions-container">
//                                 <ul className="question-item-box">
//                                     {questions}
//                                 </ul>
//                             </div>
//                         </div>

//                         <div className="personal-container">
//                             <div className="feed-container">
//                                 <div className="">
//                                     <p className="feed-header">Contact Me</p>
//                                 </div>
//                                 <div className="question-feedIndex-topics">
//                                     <a href="//github.com/rkarpov">Github </a>
//                                 </div>
//                                 <div className="question-feedIndex-topics">
//                                     <a href="https://rkarpov.github.io./">Personal Site</a>
//                                 </div>
//                                 <div className="question-feedIndex-topics">
//                                     <a href="https://www.linkedin.com/in/roman-karpov-206182145/">Linked in</a>
//                                 </div>
//                                 <div className="question-feedIndex-topics">
//                                     <a href="https://angel.co/roman-karpov">Angel List</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default QuestionTopicIndex
