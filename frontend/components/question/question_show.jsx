import React from 'react';
import QuestionIndex from './question_index';
import QuestionIndexItem from './question_index_item';

class QuestionShow extends React.Component {
  componentDidMount() {
      this.props.fetchQuestion(this.props.match.params.questionId);
  }

//   componentWillMount(){
//       this.props.fetchQuestion(this.props.match.params.questionId);
//   }

  componentDidUpdate(prevProps) {
    // debugger
    if (prevProps.questionId != this.props.match.params.questionId) {
        this.props.fetchQuestion(this.props.match.params.questionId);
    }
  }

  render() {
    return (
        <QuestionIndex // send to a separate question show page to prevent additional fetchquestions
        // <QuestionIndexItem
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
