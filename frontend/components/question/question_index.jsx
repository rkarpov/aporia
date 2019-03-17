import React from 'react';
import { Link } from 'react-router-dom';
import QuestionIndexItem from './question_index_item';
import NavbarContainer from '../navbar/navbar_container';
import TopicIndexContainer from '../topic/topic_index_container';
// import PersonalLinks from '../personal/personal_links';

class QuestionIndex extends React.Component {

    componentDidMount(){
        this.props.requestQuestions();
        this.props.requestTopics();
        this.props.requestAnswers();
        this.props.requestComments();
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
            this.props.questions.forEach( question => {
                const item = <QuestionIndexItem
                    key={`question-${question.id}`}
                    // key={question.id}
                    question={question}
                    deleteQuestion={this.props.deleteQuestion}
                    createQuestionVote={this.props.createQuestionVote}
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
        
        return (
            <div className="index-main">
                <div className="index-header-container">
                    <NavbarContainer />
                </div>

                <div className="index-body-container">
                    <div className="index-body">
                        <div className="feed-container">

                            <div hidden={this.props.match.url.includes('content') ? "hidden" : null }>
                                <p className="feed-header">Feed Topics</p>
                                <TopicIndexContainer
                                    sourceType={"feedIndex"}
                                />
                            </div>
                            {/* <input type="text" /> */}
                            <div className="content-feed-container"
                                hidden={this.props.pageType !== 'showQuestion' && this.props.match.url.includes('content') ? null : "hidden"}>
                                <h2 className="feed-content-header">By Content Type</h2>
                                <Link to="/content"><p className="feed-item">All Types</p></Link> 
                                <Link to="/content/questions"><p className="feed-item">Your Questions</p></Link> 
                                <Link to="/content/answers"><p className="feed-item">Your Answers</p></Link>
                            </div>
                        </div>

                            <div className="index-page-container">
                                <header 
                                hidden={this.props.match.path.includes('topics') ? null : "hidden"}
                                className="question-topic-container">
                                    <h2
                                        className="question-topic-description">
                                    Questions by Topic: <p className="topic-p">{this.props.match.params.description}</p>
                                    </h2>
                                </header>

                                <div
                                    className="ask-question-container"
                                    hidden={this.props.pageType === 'mainIndex' ? null : "hidden"}
                                >
                                    <div className="current-user-container">
                                        <div className="profile-index-container">
                                            <p className="avatar-initials" type="text">{initials}</p>
                                        </div>
                                        <p className="index-username">{username}</p>
                                    </div>

                                    <button
                                        className="ask-question-button"
                                        onClick={() => this.props.openModal('createQuestion')}
                                        >What is your question? Click here to ask...
                                    </button>
                                </div>

                                <div className="questions-container">
                                    <ul className="question-item-box">
                                        { questions }
                                    </ul>
                                </div>
                            </div>

                        <div className="personal-container">
                             {/* <PersonalLinks /> */}
                            {/* <div className="feed-container"> */}
                                <div className="">
                                    <p className="feed-header">Contact Me</p>
                                </div>
                                <div className="question-feedIndex-topics">
                                    <a href="//github.com/rkarpov">Github </a>
                                </div>
                                <div className="question-feedIndex-topics">
                                    <a href="https://rkarpov.github.io./">Personal Site</a>
                                </div>
                                <div className="question-feedIndex-topics">
                                    <a href="https://www.linkedin.com/in/roman-karpov-206182145/">Linked in</a>
                                </div>
                                <div className="question-feedIndex-topics">
                                    <a href="https://angel.co/roman-karpov">Angel List</a>
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>            
        )
    }
}

export default QuestionIndex
