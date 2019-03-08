import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SessionFormContainer from '../components/session/session_form_container';
import Modal from '../components/modal/modal';
import userQuestionsContainer from '../components/content/user_questions_container';
import QuestionUnansweredContainer from '../components/question/question_unanswered_container';
import QuestionIndexContainer from './question/question_index_container';
import QuestionShowContainer from './question/question_show_container';
import ContentContainer from './content/content_container';
import UserAnsweredContainer from './content/user_answered_container';
// import QuestionTopicContainer from './question/question_topic_container';
import TopicShowContainer from './topic/topic_show_container';

const App = () => {
    return (
        <div className="app-main">
            <Modal />
            <Switch>
                <AuthRoute exact path="/" component={SessionFormContainer} />
                <ProtectedRoute exact path="/index" component={QuestionIndexContainer} />   
                <ProtectedRoute exact path="/answer" component={QuestionUnansweredContainer} />   
                <ProtectedRoute exact path="/topics/:description" component={TopicShowContainer} />   
                <ProtectedRoute exact path="/content/questions" component={userQuestionsContainer} />
                <ProtectedRoute exact path="/content/answers" component={UserAnsweredContainer} />
                <ProtectedRoute exact path="/content" component={ContentContainer} />
                <ProtectedRoute exact path="/questions/:questionId" component={QuestionShowContainer} />
            </Switch>
        </div>
    );
}

export default App;