import React from 'react';
// import AnswerIndexContainer from './answer_index_container';
import AnswerIndexItem from './answer_index_item';
// import AnswerForm from './answer_form';

class AnswerIndex extends React.Component {
    componentDidMount(){
        this.props.requestAnswers(this.props.questionId)
    }

    render() {
        const answerItems = this.props.answers.map( answer => {
            // let author;  //author = "undefined undefined
            // if (answer.author) { author = answer.authorFirstName + ' ' + answer.authorLastName; }
            debugger
            return (
                    <AnswerIndexItem
                        key={`answer-${answer.id}`}
                        answer={answer}
                        deleteAnswer={this.props.deleteAnswer}
                        currentUser={this.props.currentUser}
                        // author={author}
                    />
            )
        })

        return (
            <div> 
                <ul>
                    { answerItems }
                </ul>
            </div>
        )   
    };
}

export default AnswerIndex;