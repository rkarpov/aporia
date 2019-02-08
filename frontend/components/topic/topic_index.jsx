import React from 'react';
import { Link } from 'react-router-dom';
import TopicIndexItem from './topic_index_item';

class TopicIndex extends React.Component {

    componentDidMount() {
        this.props.requestTopics()
    }

    render() {
        let topics = [];
        this.props.topics.forEach(topic => {
            const item = <TopicIndexItem
                key={topic.id}
                topic={topic}
                deleteTopic={this.props.deleteTopic}
                pageType={this.props.pageType}
                openModal={this.props.openModal}
            />
            topics.push(item);
            }
        )
        
        return (
            <div className="topics-background">
               {/* <ul className="topics-background"> */}
                { topics }
               {/* </ul> */}
           </div>
        )
    }
}

export default TopicIndex
