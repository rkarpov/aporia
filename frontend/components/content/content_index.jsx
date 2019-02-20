import React from 'react';
import { Link } from 'react-router-dom';
import ContentIndexItem from './content_index_item';
import NavbarContainer from '../navbar/navbar_container';
import PersonalLinks from '../personal/personal_links';

class ContentIndex extends React.Component {

    componentDidMount() {
        this.props.requestQuestions()
    }

    render() {
        let questions = [];
        this.props.questions.forEach(question => {
            const item = <ContentIndexItem
                key={`question-${question.id}`}
                key={question.id}
                question={question}
                deleteQuestion={this.props.deleteQuestion}
                currentUser={this.props.currentUser}
                pageType={this.props.pageType}
                openModal={this.props.openModal}
            />
        if ((this.props.pageType === 'Your Questions') && (this.props.currentUser.id === question.authorId)) {
                questions.push(item);
            } else if (this.props.pageType === 'Your Answers' && question.answerAuthorIds.includes(question.authorId)) {
                questions.push(item);
            } else if ((this.props.pageType === 'Your Content') && (this.props.currentUser.id === question.authorId) ||
                (question.answerAuthorIds.includes(this.props.currentUser.id))) {
                questions.push(item);
            }
        })

        return (
            <div className="index-main">
                <div className="index-header-container">
                    <NavbarContainer />
                </div>

                <div className="index-body-container">
                    <div className="index-body">

                        <div className="feed-container">
                            {/* <input type="text" /> */}
                            <div className="content-feed-container">
                                <h2 className="feed-content-header">By Content Type</h2>
                                <Link to="/api/content"><p className="feed-item">All Types</p></Link>
                                <Link to="/api/content/questions"><p className="feed-item">Your Questions</p></Link>
                                <Link to="/api/content/answers"><p className="feed-item">Your Answers</p></Link>
                            </div>
                        </div>

                        <div className="index-page-container">
                            <h2 className="user-content-header">{this.props.pageType}</h2>
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

export default ContentIndex
