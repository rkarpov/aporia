import React from 'react';
import { Link } from 'react-router-dom';
// import { openModal } from '../../actions/modal_actions';
import QuestionIndexItem from './question_index_item';
import NavbarContainer from '../navbar/navbar_container';

class QuestionIndex extends React.Component {

    componentDidMount(){
        this.props.requestQuestions()
    }

    render() {
        let username = (this.props.currentUser.first_name + ' ' + this.props.currentUser.last_name);

        let initials = ''
        initials += this.props.currentUser.first_name[0] + this.props.currentUser.last_name[0];
        initials = initials.toUpperCase();

        let questions = [];
        if (this.props.pageType !== 'ignore' && this.props.pageType === 'showQuestion') {
            const item = <QuestionIndexItem
                key={`question-${this.props.question.id}`}
                question={this.props.question}
                deleteQuestion={this.props.deleteQuestion}
                currentUser={this.props.currentUser}
                pageType={this.props.pageType}
                openModal={this.props.openModal}
            />
            questions.push(item);
        } else if (this.props.pageType !== 'ignore') {
            this.props.questions.forEach( question => {

                const item = <QuestionIndexItem
                    key={`question-${question.id}`}
                    question={question}
                    deleteQuestion={this.props.deleteQuestion}
                    currentUser={this.props.currentUser}
                    pageType={this.props.pageType}
                    openModal={this.props.openModal}
                />
                if ((this.props.pageType === 'unansweredQuestions') && (question.answerIds.length === 0)) {
                    questions.push(item);
                } else if (this.props.pageType === 'mainIndex') {
                    questions.push(item);
                } else if ((this.props.pageType === 'userContent') && (this.props.currentUser.id === question.authorId)) {
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
        <div className="feed-container">
            <input type="text" />
        </div>


            <div className="index-page-container">

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

        <div className="placeholder-container">
            <input className="placeholder" type="text" />
        </div>
    </div>
</div>            
        )
    }
}

export default QuestionIndex
