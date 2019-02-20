import React from 'react';
import QuestionIndex from './question_index';

class QuestionShow extends React.Component {
  componentDidMount() {
      this.props.fetchQuestion(this.props.match.params.questionId);
  }

//   componentWillMount(){
//       this.props.fetchQuestion(this.props.match.params.questionId);
//   }

  componentDidUpdate(prevProps) {
    if (prevProps.question.id != this.props.match.params.questionId) {
        this.props.fetchQuestion(this.props.match.params.questionId);
    }
  }

  render() {
    return (
        <QuestionIndex
            question={this.props.question}
            deleteQuestion={this.props.deleteQuestion}
            currentUser={this.props.currentUser}
            pageType={this.props.pageType}
            requestQuestions={this.props.requestQuestions}
            createQuestionVote={this.props.createQuestionVote}
            questions={this.props.questions}
            openModal={this.props.openModal}
            match={this.props.match}
        />
    );
  }
}

export default QuestionShow;
