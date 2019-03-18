import React from 'react';
import QuestionIndex from '../question/question_index';
import QuestionTopicIndex from './question_topic_index';
class TopicShow extends React.Component {

    componentDidMount(){
        this.props.requestTopic(this.props.topic.id);
        this.props.requestTopics();
        this.props.requestComments();

        // dummy id to fetch answers because nested route under questionId
        this.props.requestAnswers(-0);
    }

    render() {
        return (
            <QuestionTopicIndex
            // <QuestionIndex
                deleteQuestion={this.props.deleteQuestion}
                requestTopic={this.props.requestTopic}
                questions={this.props.questions}
                topic={this.props.topic}
                topicId={this.props.topic.id}
                match={this.props.match}
                currentUser={this.props.currentUser}
                pageType={this.props.pageType}
                openModal={this.props.openModal}
                createQuestionVote={this.props.createQuestionVote}
            />
        );
    }
}

export default TopicShow;
