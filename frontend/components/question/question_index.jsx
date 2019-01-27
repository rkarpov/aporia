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
                <div>
                    {/* <Link to="/questions/new">What is your question?</Link> */}
                    <button onClick={() => this.props.openModal('createQuestion')}>What is your question?</button>
                    
                </div>
                <div className="Questions-container">
                    <ul className="question-item-box">
                        { questions }
                    </ul>
                </div>
            </div>
        )
    }
}

export default QuestionIndex
