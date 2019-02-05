import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ContentIndexItem extends React.Component {

    render() {
        // debugger
        if (((this.props.pageType === 'Your Questions') && (this.props.question.authorId !== this.props.currentUser.id)) ||
            ((this.props.pageType === 'Your Answers') && !(this.props.question.answerAuthorIds.includes(this.props.currentUser.id)))) {
            // ((this.props.pageType === 'Your Answers') && (Object(this.props.question.answerAuthorIds).length !== 0))) {
            return (
                <></>
            )
        } else {
            return (
                <div className="content-index-item-container" >
                    <div className="content-index-item">
                        <p hidden={this.props.question.answerAuthorIds.includes(this.props.currentUser.id) ? null : "hidden"}>Your Answer to </p>
                        <p hidden={!this.props.question.answerAuthorIds.includes(this.props.currentUser.id) && (this.props.question.authorId === this.props.currentUser.id) ? null : "hidden" }
                        >Asked on {this.props.question.date} </p>

                        <Link to={`/api/questions/${this.props.question.id}`} className="question-body">
                            <p className="content-question-body testing">{this.props.question.body}</p>
                        </Link>
                    </div>

                    <footer >
                    
                    </footer>
                </div>
            )
        }
    }
}

export default withRouter(ContentIndexItem);
