import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CreateAnswerContainer from '../../components/answer/create_answer_container';
import AnswerIndexContainer from '../../components/answer/answer_index_container';
const ClickOutHandler = require('react-onclickout');
// import CreateTopicContainer from '../topic/create_topic_container';
import TopicIndexContainer from '../topic/topic_index_container';

class QuestionIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropdown: false, options: false };
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleOptions = this.toggleOptions.bind(this);
        this.onClickOut = this.onClickOut.bind(this);
    };

    toggleDropdown() {
        // e.preventDefault();
        this.setState({
            dropdown: !this.state.dropdown
        });
    }

    dropdown() {

        // let initials = ''
        // initials += this.props.currentUser.first_name[0] + this.props.currentUser.last_name[0];
        // initials = initials.toUpperCase();

        let dropdown;
        if (this.state.dropdown) {
            dropdown =
                <CreateAnswerContainer
                    toggleDropdown={this.toggleDropdown}
                    questionId={this.props.question.id}
                />
        }

        return (
            <div className="dropdown">
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

    // event listener for clicking outside <ClickOutHandler/> component
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
                        >Edit Question</button>
                        {/* <button
                            className="dropdown-item"  
                        >Edit Topics</button> */}
                        <button
                            className="dropdown-item"  
                        onClick={() => this.props.openModal({ modal: 'createTopic', questionId: this.props.question.id })}
                        >Add Topic</button>
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
        // renders undefined undefined upon creating an answer,
        // unless using similar logic to answerIndexItem
        
        // let authorInitials = ''
        // const names = this.props.author.split(' ')
        // authorInitials += names[0][0] + names[1][0];
        // authorInitials = authorInitials.toUpperCase();
       debugger
        return (
                <div className="question-index-item-container" >
                    <header className="question-index-header-container">
                        <div className="question-index-topics-container">
                            <div >
                                <TopicIndexContainer 
                                    topicIds={this.props.question.topicIds}
                                    sourceType="questionIndex"
                                />
                            </div>
                        </div>
                        {/* Question avatar icon & username */}
                        {/* <div className="pleasework">
                            <div className="profile-index-container">
                                <p className="avatar-initials" type="text">
                                    {authorInitials}
                                </p>
                            </div>
                            <p className="authorname">{this.props.author}</p>
                        </div> */}
                    </header>

                    <Link to={`/api/questions/${this.props.question.id}`} className="question-body">
                            <p className="question-body testing">{this.props.question.body}</p>
                    </Link>
           
                    <footer hidden={this.props.match.url.includes("content") ? "hidden" : null} >
                        <div hidden={this.props.formType === 'editQuestion' ? "hidden" : null}>
                            {this.dropdown()}
                            <span className="options-container">
                                {this.options()}
                            </span>
                        </div>
                        <div >
                            <AnswerIndexContainer 
                                questionId={this.props.question.id}
                            />
                        </div>
                    </footer>
                </div>
        )
    }
}

export default withRouter(QuestionIndexItem);
