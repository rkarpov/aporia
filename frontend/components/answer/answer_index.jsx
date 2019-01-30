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
            
            return (
                // <ul className="answer-item-container">
                    // AnswerId {answer.id}
                    <AnswerIndexItem
                        key={`answer-${answer.id}`}
                        answer={answer}
                        deleteAnswer={this.props.deleteAnswer}
                        currentUser={this.props.currentUser}
                    />
                // </ul> 
            )})

        return (
            <div> 
                { answerItems }
            </div>
        )   
    };
}


export default AnswerIndex;



// return (
//     <div>
//         <ul className="answer-list">
//             {answerItems}
//         </ul>
//         <AnswerForm
//             question_id={this.props.question_id}
//             action={this.props.action}
//         />
//     </div>
// )