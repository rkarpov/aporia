import React from 'react';
import QuestionIndexContainer from '../question/question_index_container';
import CreateQuestionContainer from '../question/create_question_container';
import EditQuestionContainer from '../question/edit_question_container';
import NavbarContainer from '../../components/navbar/navbar_container';

const indexPageContainer = () => (
    
    <div className="index-main">
        <div className="index-header-container">
            <NavbarContainer/>
        </div>

        <div className="index-body-container">
            <div className="feed-container">
                <input type="text"/>
            </div>

            <QuestionIndexContainer/>

            <div className="placeholder-container">
                <input className="placeholder" type="text" />
            </div>
        </div>
    </div>
);

export default indexPageContainer;

