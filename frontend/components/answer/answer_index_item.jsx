import React from 'react';
import { Link, withRouter } from 'react-router-dom';
 
const AnswerIndexItem = (props) => {
    
    return(
        <li>
            <div className="answer-body-container">
                <p className="answer-body testing">{props.answer.body}</p>
            </div>
            <Link className="edit-answer-button" to={`/answers/${props.answer.id}/edit`}>Edit</Link>
            <button className="delete-answer-button" onClick={ () => props.deleteAnswer(props.answer.id)}>
                Delete
            </button>
        </li>
    )   

}

export default withRouter(AnswerIndexItem);