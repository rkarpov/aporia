import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class QuestionIndexItem extends React.Component {
    constructor(props) {
        super(props);
        
        // this.props.deleteQuestion = this.props.deleteQuestion.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
 
    handleSubmit(e){
        e.preventDefault;
        debugger
        // return (id) => this.deleteQuestion(id)
    }

    // renderTopics(){

    // }
    // <div className="question-topics-header">
    //     renderTopics()
    // </div>

    render(){
        let initials = ''
        initials += this.props.currentUser.first_name[0] + this.props.currentUser.last_name[0];
        initials = initials.toUpperCase();

        return (
            <div className={`question-${this.props.question.id}`}>
                
                <div className="question-index-item-container">
                    <header className="question-index-header-container">
                        <div className="profile-index-container">
                            <p className="avatar-initials" type="text">
                                {initials}
                            </p>
                        </div>
                        <div className="question-index-topics-container">
                            <p className="question-topics">
                                topics
                            </p>
                        </div>
                    </header>

                  
                    <Link to={`/questions/${this.props.question.id}`} className="question-body">
                            <p className="testing">{this.props.question.body}</p>
                    </Link>
           

                <div>
                    {/* <Link to={`/questions/${this.props.question.id}`}>question show</Link> */}
                    {/* <Link to={`/questions/${props.question.id}/edit`}>Edit</Link> */}
                    {/* <button onClick={() => this.props.deleteQuestion(this.props.question.id)}>delete</button> */}
                </div>

                <footer>
                    <Link to="">Answer</Link>
                </footer>
                </div>

            </div>
        )
    }
}

export default withRouter(QuestionIndexItem);
