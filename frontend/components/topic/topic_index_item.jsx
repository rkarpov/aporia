import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TopicIndexItem extends React.Component {

    render() {
        debugger
        return(
            <div className={`question-${this.props.sourceType}-topics`}>
            {/* link to topic/topic.id url path to index questions that have that topics id*/}
                <Link to={`/api/topics/${this.props.topic.description}`}>
                    { this.props.topic.description } 
                </Link>
                <div hidden={this.props.match.url.includes('question') ? null : "hidden"}>
                <button 
                    className="delete-topic-button"
                    // onClick={() => this.props.deleteTopic(this.props.topic.id)}
                    onClick={() => this.props.deleteTopic({ topic_id: this.props.topic.id, question_id: this.props.questionId })}
                    hidden={this.props.sourceType === 'feedIndex' ? "hidden" : null }    
                    >
                x
                </button>
                </div>
            </div>
        )

    }
}

export default withRouter(TopicIndexItem);