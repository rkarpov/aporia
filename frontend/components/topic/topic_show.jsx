import React from 'react';
import QuestionIndex from '../question/question_index';
import QuestionTopicIndex from './question_topic_index';
class TopicShow extends React.Component {

    componentDidMount(){
        this.props.requestTopic(this.props.topic.id)
    }

    render() {
        return (
            <QuestionTopicIndex
                // <QuestionIndex
                // fetchQuestion={this.props.fetchQuestion}
                deleteQuestion={this.props.deleteQuestion}
                // requestQuestions={this.props.requestQuestions}
                // requestTopics={this.props.requestTopics}
                requestTopic={this.props.requestTopic}
                questions={this.props.questions}
                topic={this.props.topic}
                topicId={this.props.topic.id}
                match={this.props.match}
                // question={this.props.question}
                // deleteQuestion={this.props.deleteQuestion}
                currentUser={this.props.currentUser}
                pageType={this.props.pageType}
                // requestQuestions={this.props.requestQuestions}
                openModal={this.props.openModal}
                createQuestionVote={this.props.createQuestionVote}
            />
        );
    }
}

export default TopicShow;
