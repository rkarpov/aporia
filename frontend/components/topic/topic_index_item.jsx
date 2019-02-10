import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TopicIndexItem extends React.Component {

    render() {
        // debugger
        return(
            <div className={`question-${this.props.sourceType}-topics`}>
            {/* link to topic/topic.id url path to index questions that have that topics id*/}
            <Link to={`/api/topics/${this.props.topic.description}`}>
                { this.props.topic.description } 
            </Link>
                <button 
                    className="delete-topic-button"
                    onClick={() => this.props.deleteTopic(this.props.topic.id)}
                    hidden={this.props.sourceType === 'feedIndex' ? "hidden" : null }    
                >
                x
                </button>
            </div>
        )

    }
}

export default withRouter(TopicIndexItem);