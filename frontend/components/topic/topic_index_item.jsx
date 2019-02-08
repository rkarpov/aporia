import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TopicIndexItem extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {

        return(
            <div className="question-topics">
                { this.props.topic.description }
                <button className="delete-topic-button" onClick={() => this.props.deleteTopic(this.props.topic.id)}>
                x
                </button>
            </div>
        )

    }
}

export default withRouter(TopicIndexItem);