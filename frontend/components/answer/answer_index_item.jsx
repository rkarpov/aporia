import React from 'react';
import { Link, withRouter } from 'react-router-dom';
 
const AnswerIndexItem = (props) => {
    
    return(
        <li>
            <div className="answer-body-container">
                <p className="answer-body">{props.answer.body}</p>
            </div>
            <Link to={`/answers/${props.answer.id}/edit`}>Edit</Link>
            <button onClick={ () => props.deleteAnswer(props.answer.id)}>
                Delete
            </button>
        </li>
    )   

}

export default withRouter(AnswerIndexItem);