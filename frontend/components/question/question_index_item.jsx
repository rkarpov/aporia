import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class QuestionIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.deleteQuestion = this.deleteQuestion.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
 
    handleSubmit(e){
        e.preventDefault;
        this.setState(this.deleteQuestion(id))
    }

    // renderTopics(){

    // }
    // <div className="question-topics-header">
    //     renderTopics()
    // </div>

    render(){
        return (
            <div>
                
                <header>
                    username, topics
                </header>


                <h1 className="question-body">
                    {this.props.question.body}
                </h1>

                <div>
                    <Link to={`/questions/${props.question.id}`}>index?</Link>
                    {/* <Link to={`/questions/${props.question.id}/edit`}>Edit</Link> */}
                    <button onClick={() => props.deleteQuestion(props.question.id)}>delete</button>
                </div>

                <footer>
                    {/* <Link to="">Answer</Link> */}
                </footer>

            </div>
        )
    }
}

export default withRouter(QuestionIndexItem);
