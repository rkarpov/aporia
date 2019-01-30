import React from 'react';
import { Link } from 'react-router-dom';
// import { openModal } from '../../actions/modal_actions';
import QuestionIndexItem from './question_index_item';


class QuestionIndex extends React.Component {

    componentDidMount(){
        this.props.requestQuestions()
    }

    render() {
        let username = (this.props.currentUser.first_name + ' ' + this.props.currentUser.last_name);

        let initials = ''
        initials += this.props.currentUser.first_name[0] + this.props.currentUser.last_name[0];
        initials = initials.toUpperCase();

        // const author = this.props.author
        const currentUser = this.props.currentUser
        const deleteQuestion = this.props.deleteQuestion
        const questions = this.props.questions.map( question => {
           return (
          
                    <QuestionIndexItem
                        key={`question-${question.id}`}
                        question={question}
                        deleteQuestion={deleteQuestion}
                        currentUser={currentUser}
                        // author={author}
                    />
             
            )
        })

        return (
            <div className="index-page-container">

                <div className="ask-question-container">
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
        )
    }
}

export default QuestionIndex
