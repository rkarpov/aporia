import React from 'react';
import { Link } from 'react-router-dom';
import UserQuestionItem from './user_question_item';
import NavbarContainer from '../navbar/navbar_container';

class UsersQuestionsIndex extends React.Component {

    componentDidMount() {
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
        const questions = this.props.questions.map(question => {
            let author;
            author = question.authorFirstName + ' ' + question.authorLastName;

            
            return (

                <UserQuestionItem
                    key={`question-${question.id}`}
                    question={question}
                    deleteQuestion={deleteQuestion}
                    currentUser={currentUser}
                    pageType={this.props.pageType}
                    author={author}
                />

            )
        })

        return (
<>
<div className="index-main">
    <div className="index-header-container">
        <NavbarContainer />
    </div>
         
    <div className="index-body-container">
        <div className="feed-container">
            <input type="text" />
        </div>

                    <div className="index-page-container">
                        <div className="questions-container">
                            <ul className="question-item-box">
                                {questions}
                            </ul>
                        </div>
                    </div>
                <div className="placeholder-container">
            <input className="placeholder" type="text" />
        </div>
    </div>
</div>

   </>

    

        )
    }
}

export default UsersQuestionsIndex
