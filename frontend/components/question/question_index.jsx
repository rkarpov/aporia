import React from 'react';
import { Link } from 'react-router-dom';
// import { openModal } from '../../actions/modal_actions';
import QuestionIndexItem from './question_index_item';


class QuestionIndex extends React.Component {

    componentDidMount(){
        this.props.requestQuestions()
    }

    render() {

        const questions = this.props.questions.map( question => {
            <QuestionIndexItem
                key={this.props.questionId}
                question={question}
                deleteQuestion={this.props.deleteQuestion}
            />
        })

        return (
            <div className="index-page-container">

                <div className="ask-question-container">
                    <div className="current-user-container">
                        <div className="profile-index-container">
                            <p className="avatar-initials" type="text">FL</p>
                        </div>
                        <p className="index-username">First Last</p>
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
        )
    }
}

export default QuestionIndex
