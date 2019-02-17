import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import TopicIndexContainer from './topic_index_container';
class TopicIndexItem extends React.Component {
 
    render() {
        return(
            <div className={this.props.match.params.description === `${this.props.topic.description}` ? `question-${this.props.sourceType}-topics selected-topic` : `question-${this.props.sourceType}-topics`}>
            {/* link to topic/topic.id url path to index questions that have that topics id*/}
                <Link to={`/api/topics/${this.props.topic.description}`}>
                    { this.props.topic.description } 
                </Link>
                <div className="delete-topic-button-container" hidden={this.props.match.url.includes('question') ? null : "hidden"}>
                    <button 
                        className="delete-topic-button"
                        onClick={() => this.props.deleteTopic({ topic_id: this.props.topic.id, question_id: this.props.questionId })}
                        hidden={this.props.sourceType === 'feedIndex' ? "hidden" : null }    
                        >
                    {/* x */}
                        <img src={window.closeIcon} />
                    </button>
                </div>
            </div>
        )

    }
}

export default withRouter(TopicIndexItem);