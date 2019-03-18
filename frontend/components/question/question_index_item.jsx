import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CreateAnswerContainer from '../../components/answer/create_answer_container';
import AnswerIndexContainer from '../../components/answer/answer_index_container';
const ClickOutHandler = require('react-onclickout');
import TopicIndexContainer from '../topic/topic_index_container';

class QuestionIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropdown: false, options: false };
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleOptions = this.toggleOptions.bind(this);
        this.onClickOut = this.onClickOut.bind(this);
    }

    toggleDropdown() {
        this.setState({
            dropdown: !this.state.dropdown
        });
    }

    dropdown() {
        let dropdown;
        if (this.state.dropdown) {
            dropdown =
                <CreateAnswerContainer
                    toggleDropdown={this.toggleDropdown}
                    questionId={this.props.question.id}
                />
        }

        return (
            <div className="dropdown-answer-form">
                <div className="answer-index-container">
                    <div className="answer-icon-container">
                        <img className="answer-index-svg" onClick={this.toggleDropdown} src={window.answerIcon} />
                    </div>
                    <a className="answer-button" onClick={this.toggleDropdown} type="text">Answer</a>
                </div>
                {dropdown}
            </div>
        );
    }

    onClickOut(e) {
        if (this.state.options) {
            this.setState({
                options: !this.state.options
            });
        }
    }

    toggleOptions(e) {
        e.preventDefault();
        this.setState({
            options: !this.state.options
        })
    }

    options() {
        let options;
        if (this.state.options) {
            options = 
                <div className="options-content" >
                    <div className="dropdown-items-list">
                        <button
                            className="dropdown-item"  
                            onClick={() => this.props.openModal({ modal: 'editQuestion', questionId: this.props.question.id })}
                            >Edit Question
                        </button>

                        <button
                            className="dropdown-item"
                            onClick={() => this.props.openModal({ modal: 'createTopic', questionId: this.props.question.id })}
                            >Add Topic
                        </button>

                        <Link
                            to="/content/questions"
                            hidden={
                                this.props.question.answerAuthorIds.length === 0 && 
                                this.props.currentUser.id === this.props.question.authorId && 
                                this.props.match.url.includes('question')
                                ? null : "hidden"}
                            className="dropdown-item"  
                            onClick={() => this.props.deleteQuestion(this.props.question.id)}
                        >Delete Question
                        </Link>

                        <Link
                            to="/index"
                            hidden={
                                this.props.question.answerAuthorIds.length === 0 && 
                                this.props.currentUser.id === this.props.question.authorId && 
                                this.props.match.url.includes('index')
                                ? null : "hidden"}
                            className="dropdown-item"  
                            onClick={() => this.props.deleteQuestion(this.props.question.id)}
                            >Delete Question
                        </Link>
                    </div>
                </div>
        }

        return (
            <ClickOutHandler onClickOut={() => this.onClickOut()}>
                <div className="dropdown">
                        <div className="options-icon-container">
                            <img className="options-icon-svg" onClick={this.toggleOptions} src={window.optionsIcon} />
                        </div>
                    {options}
                </div>
            </ClickOutHandler>
        )
    }

    render(){
        return (
            <div className="question-index-item-container" >
                <header className="question-index-header-container">
                    <div className="question-index-topics-container">
                        <div >
                            <TopicIndexContainer 
                                topicIds={this.props.question.topicIds}
                                sourceType="questionIndex"
                                questionId={this.props.question.id}
                            />
                        </div>
                    </div>
                </header>

                <Link to={`/questions/${this.props.question.id}`} className="question-body">
                        <p className="question-body testing">{this.props.question.body}</p>
                </Link>

                <footer hidden={this.props.match.url.includes("content") ? "hidden" : null} >
                    <div hidden={this.props.formType === 'editQuestion' ? "hidden" : null}>
                        <span className="options-container">
                            {this.options()}
                        </span>
                        <div className="answer-index-container">
                            <span>
                                {this.dropdown()}
                            </span>  
                        </div>
                    </div>
                    <div >
                        <AnswerIndexContainer 
                            questionId={this.props.question.id}
                            comments={this.props.comments}
                        />
                    </div>
                    <div>
                        <button 
                            className={this.props.question.upVoterIds.includes(this.props.currentUser.id) ? "selected-vote-button" : "vote-button"}
                            onClick={() => this.props.createQuestionVote({ 
                                user_id: this.props.currentUser.id,
                                question_id: this.props.question.id,
                                votable_type: 'Question',
                                vote: 'up'
                            })}>
                            UpVote
                        </button>
                        <label>{this.props.question.votes}</label>
                        <button 
                            className={this.props.question.downVoterIds.includes(this.props.currentUser.id) ? "selected-vote-button" : "vote-button"}
                            onClick={() => this.props.createQuestionVote({
                                user_id: this.props.currentUser.id,
                                question_id: this.props.question.id,
                                votable_type: 'Question',
                                vote: 'down'
                            })}>
                            DownVote
                        </button>
                    </div>
                </footer>
            </div>
        )
    }
}

export default withRouter(QuestionIndexItem);
