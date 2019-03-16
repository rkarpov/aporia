import React from 'react';
import { Link } from 'react-router-dom';
import TopicIndexItem from './topic_index_item';

class TopicIndex extends React.Component {

    componentDidMount() {
        this.props.requestTopics()
        // this.props.requestQuestions()
    }

    render() {
        
        let topics = [];
        this.props.topics.forEach(topic => {
            const item = <TopicIndexItem
                key={topic.id}
                topic={topic}
                // topicIds={this.props.topicIds}
                deleteTopic={this.props.deleteTopic}
                pageType={this.props.pageType}
                sourceType={this.props.sourceType}
                openModal={this.props.openModal}
                questionId={this.props.questionId}
                // requestTopics={this.props.requestTopics}
                // fetchQuestion={this.props.fetchQuestion}
                // state={this.state}
            />
            if (this.props.pageType === 'showQuestion') {
                topics.push(item);
            } else if (this.props.sourceType === 'feedIndex' && topic.questionIds.length > 0) {
                topics.push(item);
            // } else if ((this.props.sourceType === 'questionIndex') && (this.props.topicIds.includes(topic.id))) {
            } else if ((this.props.sourceType === 'questionIndex') && (topic.questionIds.includes(this.props.questionId))) {
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
