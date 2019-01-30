import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import EditAnswerContainer from './edit_answer_container';
 


class AnswerIndexItem extends React.Component {
    constructor(props) {
        super(props)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    // handleSubmit(){
    //     return (
    //         <EditAnswerContainer />
    //     );
    // };


    render() {
        
    return(
        <li className="answer-item-container">
            <div className="answer-body-container">
                <p className="answer-body testing">{this.props.answer.body}</p>
            </div>
            {/* {<EditAnswerContainer />} */}
            {/* <Link className="edit-answer-button" to={`/answers/${props.answer.id}/edit`}>Edit</Link> */}
            <Link to={`/answers/${this.props.answer.id}/edit`} className="edit-answer-button" >Edit</Link>
            {/* <EditAnswerContainer /> */}
            <button className="delete-answer-button" onClick={ () => this.props.deleteAnswer(this.props.answer.id)}>
                Delete
            </button>
        </li>
    )   
    }
}

export default withRouter(AnswerIndexItem);