import React from 'react';
import { Link } from 'react-router-dom';
import QuestionIndexItem from '../question/question_index_item';
import NavbarContainer from '../navbar/navbar_container';
import TopicIndexContainer from './topic_index_container';
import PersonalLinks from '../personal/personal_links';

class QuestionTopicIndex extends React.Component {

    componentDidMount() {
        this.props.requestQuestions()
        this.props.requestTopics()
    }
    
    componentWillMount() {
        this.props.requestQuestions()
        this.props.requestTopics();
    }

    componentDidUpdate(prevProps) {
        
        // if (prevProps.topic.id != this.props.match.params.topicId) {
        //     this.props.fetchTopic(this.props.match.params.topicId);
        // }
        if (prevProps.topic.description != this.props.topic.description) {
            this.props.requestTopic(this.props.topic.id);
        }

    
    }
    render() {
        let username = (this.props.currentUser.first_name + ' ' + this.props.currentUser.last_name);

        let initials = ''
        initials += this.props.currentUser.first_name[0] + this.props.currentUser.last_name[0];
        initials = initials.toUpperCase();

        let questions = [];
        if (this.props.pageType === 'showQuestion') {
            const item = <QuestionIndexItem
                key={`question-${this.props.question.id}`}
                question={this.props.question}
                deleteQuestion={this.props.deleteQuestion}
                currentUser={this.props.currentUser}
                pageType={this.props.pageType}
                openModal={this.props.openModal}
                createQuestionVote={this.props.createQuestionVote}
            />
            questions.push(item);
        } else {
            this.props.questions.forEach(question => {
                const item = <QuestionIndexItem
                    key={`question-${question.id}`}
                    // key={question.id}
                    question={question}
                    deleteQuestion={this.props.deleteQuestion}
                    currentUser={this.props.currentUser}
                    pageType={this.props.pageType}
                    openModal={this.props.openModal}
                    createQuestionVote={this.props.createQuestionVote}
                />
                if ((this.props.pageType === 'unansweredQuestions') && (question.answerAuthorIds.length === 0)) {
                    questions.push(item);
                } else if ((this.props.pageType === 'mainIndex') || (this.props.pageType === 'showQuestionTopic')) {
                    questions.push(item);
                }
            })
        }
        this.test = getState();
        return (
            <div className="index-main">
                <div className="index-header-container">
                    <NavbarContainer />
                </div>

                <div className="index-body-container">
                    <div className="index-body">
                        <div className="feed-container">

                            <div >
                                <p className="feed-header">Feed Topics</p>
                                <TopicIndexContainer
                                    sourceType={"feedIndex"}
                                />
                            </div>
                            {/* <input type="text" /> */}
                           
                        </div>

                        <div className="index-page-container">
                            <header
                                
                                className="question-topic-container">
                                <h2
                                    className="question-topic-description">
                                    Questions by Topic: <p className="topic-p">{this.props.topic.description}</p>
                                </h2>
                            </header>

                            <div className="questions-container">
                                <ul className="question-item-box">
                                    {questions}
                                </ul>
                            </div>
                        </div>

                        <div className="personal-container">
                            <PersonalLinks />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionTopicIndex
