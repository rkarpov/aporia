import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CreateAnswerContainer from '../../components/answer/create_answer_container';
import AnswerIndexContainer from '../../components/answer/answer_index_container';

class QuestionIndexItem extends React.Component {
    constructor(props) {
        super(props);
        
        // this.props.deleteQuestion = this.props.deleteQuestion.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
 
    handleSubmit(e){
        e.preventDefault;
        // debugger
        // return (id) => this.deleteQuestion(id)
    }

    // renderTopics(){

    // }
    // <div className="question-topics-header">
    //     renderTopics()
    // </div>

    render(){

        // let username;
        // if (this.props.currentUser) {
            // username = (this.props.currentUser.first_name + ' ' + this.props.currentUser.last_name); ``
            // initials += this.props.currentUser.first_name[0] + this.props.currentUser.last_name[0];
            // initials = initials.toUpperCase();
            // }

        let authorInitials = ''
        const names = this.props.author.split(' ')
        authorInitials += names[0][0] + names[1][0];
        authorInitials = authorInitials.toUpperCase();

        return (
            <div className={`question-${this.props.question.id}`}>
                
                <div className="question-index-item-container">
                    <header className="question-index-header-container">
                        <div className="question-index-topics-container">
                            <p className="question-topics">
                                General Topic
                            </p>
                        </div>
                        {/* <div className="pleasework">
                            <div className="profile-index-container">
                                <p className="avatar-initials" type="text">
                                    {authorInitials}
                                </p>
                            </div>
                            <p className="authorname">{this.props.author}</p>
                        </div> */}
                    </header>

                  
                    <Link to={`/questions/${this.props.question.id}`} className="question-body">
                            <p className="testing">{this.props.question.body}</p>
                    </Link>
           

                <div>
                    {/* <Link to={`/questions/${this.props.question.id}`}>question show</Link> */}
                    {/* <Link to={`/questions/${props.question.id}/edit`}>Edit</Link> */}
                    {/* <button onClick={() => this.props.deleteQuestion(this.props.question.id)}>delete</button> */}
                </div>

                    <footer hidden={this.props.pageType === 'mainIndex' ? null : "hidden"}>
                    {/* <Link to="">Answer</Link> */}
                    <CreateAnswerContainer
                        questionId={this.props.question.id}
                    />
                    <AnswerIndexContainer 
                        questionId={this.props.question.id}
                    />
                    {/* onClick handle submit and call render of <CreateAnswerContainer/> */}
                </footer>
                </div>

            </div>
        )
    }
}

export default withRouter(QuestionIndexItem);
