import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// import LogInFormContainer from '../components/session_form/login_form_container';
// import SignUpFormContainer from '../components/session_form/signup_form_container';
// import SessionFormContainer from '../components/session_form/session_form_container';
import SessionFormContainer from '../components/session/session_form_container';
// import IndexPageContainer from '../components/question/question_index_container';
import IndexPageContainer from '../components/index/index_page_container'
import Modal from '../components/modal/modal';
// import CreateQuestionContainer from './question/create_question_container';
import EditAnswerContainer from '../components/answer/answer_edit_container';
import userQuestionsContainer from '../components/content/user_questions_container';
import QuestionUnansweredContainer from '../components/question/question_unanswered_container';
import QuestionIndexContainer from './question/question_index_container';
import QuestionShowContainer from './question/question_show_container';
import ContentContainer from './content/content_container';
import UserAnsweredContainer from './content/user_answered_container'

const App = () => {
    return (
        <div className="app-main">
            <Modal />
            <Switch>
                <AuthRoute exact path="/" component={SessionFormContainer} />
                {/* <ProtectedRoute exact path="/index" component={IndexPageContainer} />    */}
                <ProtectedRoute exact path="/index" component={QuestionIndexContainer} />   
                <ProtectedRoute exact path="/answer" component={QuestionUnansweredContainer} />   
                {/* <ProtectedRoute exact path="/answers/:answerId/edit" component={EditAnswerContainer}/> */}
                <ProtectedRoute exact path="/api/content/questions" component={userQuestionsContainer} />
                <ProtectedRoute exact path="/api/content/answers" component={UserAnsweredContainer} />
                <ProtectedRoute exact path="/api/content" component={ContentContainer} />
                {/* <ProtectedRoute exact path="/questions/new" component={CreateQuestionContainer} /> */}
                <ProtectedRoute exact path="/api/questions/:questionId" component={QuestionShowContainer} />
            </Switch>
        </div>
    );
}

export default App;