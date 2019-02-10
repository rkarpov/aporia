import React from 'react';
import QuestionIndex from '../question/question_index';

class TopicShow extends React.Component {
    componentDidMount() {
        this.props.fetchTopic(this.props.match.params.topicId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.topic.id != this.props.match.params.topicId) {
            this.props.fetchTopic(this.props.match.params.topicId);
        }
    }

    render() {
                return (
            // <div>
            //     hello
            // </div>
            <QuestionIndex
                question={this.props.question}
                // deleteQuestion={this.props.deleteQuestion}
                currentUser={this.props.currentUser}
                pageType={this.props.pageType}
                // requestQuestions={this.props.requestQuestions}
                questions={this.props.questions}
                openModal={this.props.openModal}
            />
        );
    }
}

export default TopicShow;
