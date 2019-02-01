import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserQuestionItem extends React.Component {



    render() {
        if (this.props.currentUser.id === this.props.question.authorId) {
            return (
                // <div className={`question-${this.props.question.id}`}>
                    <div className="question-index-item-container">
                    <Link to={`/questions/${this.props.question.id}`} className="question-body">
                        <p className="testing">{this.props.question.body}</p>
                    </Link>
                    {this.props.question.date}
                    </div>
                // </div>
            )
        } else { return <div></div> }
    }
}

export default withRouter(UserQuestionItem);
