import React from 'react';
import AnswerIndexItem from './answer_index_item';

class AnswerIndex extends React.Component {

    render() {
        const answerItems = this.props.answers.map( answer => {
            return (
                    <AnswerIndexItem
                        key={`answer-${answer.id}`}
                        answer={answer}
                        deleteAnswer={this.props.deleteAnswer}
                        currentUser={this.props.currentUser}
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