import React from 'react';
import { Link } from 'react-router-dom';
import TopicIndexItem from './topic_index_item';
import { debug } from 'util';

class TopicIndex extends React.Component {

    componentDidMount() {
        this.props.requestTopics()
    }
    
    render() {
        let topics = [];
        // debugger
        this.props.topics.forEach(topic => {
            const item = <TopicIndexItem
                key={topic.id}
                topic={topic}
                deleteTopic={this.props.deleteTopic}
                pageType={this.props.pageType}
                sourceType={this.props.sourceType}
                openModal={this.props.openModal}
            />
            if (this.props.sourceType === 'feedIndex') {
                topics.push(item);
            } else if ((this.props.sourceType === 'questionIndex') && (this.props.topicIds.includes(topic.id))) {
                topics.push(item); 
                }
            }
        )
        
        return (
            <div className={`topics-${this.props.sourceType}-background`}>
               {/* <ul className="topics-background"> */}
                { topics }
               {/* </ul> */}
           </div>
        )
    }
}

export default TopicIndex
