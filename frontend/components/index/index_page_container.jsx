import React from 'react';
import QuestionIndexContainer from '../question/question_index_container';
import CreateQuestionContainer from '../question/create_question_container';
import EditQuestionContainer from '../question/edit_question_container';

const indexPageContainer = () => (
    
    <div className="index-main">
        
        <div className="">
            <h1>nav container goes here</h1> <br/>
            <QuestionIndexContainer/>
            {/* <CreateQuestionContainer/> */}
        </div>

    </div>
);

export default indexPageContainer;

