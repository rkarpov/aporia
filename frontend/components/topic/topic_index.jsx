import React from 'react';
import { Link } from 'react-router-dom';
import TopicIndexItem from './topic_index_item';

class TopicIndex extends React.Component {

    render() {
        
        let topics = [];
        this.props.topics.forEach(topic => {
            const item = <TopicIndexItem
                key={topic.id}
                topic={topic}
                deleteTopic={this.props.deleteTopic}
                pageType={this.props.pageType}
                sourceType={this.props.sourceType}
                openModal={this.props.openModal}
                questionId={this.props.questionId}
            />
            if (this.props.pageType === 'showQuestion') {
                topics.push(item);
            } else if (this.props.sourceType === 'feedIndex' && topic.questionIds.length > 0) {
                topics.push(item);
            } else if ((this.props.sourceType === 'questionIndex') && (topic.questionIds.includes(this.props.questionId))) {
                topics.push(item); 
                }
            }
        )
        
        return (
            <div className={`topics-${this.props.sourceType}-background`}>
                { topics }
           </div>
        )
    }
}

export default TopicIndex
