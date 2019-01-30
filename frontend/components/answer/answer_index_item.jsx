import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import EditAnswerContainer from './edit_answer_container';
 
const AnswerIndexItem = (props) => {
    
    

    return(
        <li className="answer-item-container">
            <div className="answer-body-container">
                <p className="answer-body testing">{props.answer.body}</p>
            </div>
            {/* {<EditAnswerContainer />} */}
            {/* <Link className="edit-answer-button" to={`/answers/${props.answer.id}/edit`}>Edit</Link> */}
            <button className="edit-answer-button" onClick={ () => <EditAnswerContainer/>}>Edit</button>
            <button className="delete-answer-button" onClick={ () => props.deleteAnswer(props.answer.id)}>
                Delete
            </button>
        </li>
    )   

}

export default withRouter(AnswerIndexItem);