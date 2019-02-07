import { combineReducers } from 'redux';
import users from './users_reducer';
import questions from './questions_reducer';
import answers from './answers_reducer';
import comments from './comments_reducer';
// import errors from './errors_reducer';
// import ui from './ui_reducer';

export default combineReducers({
    users,
    questions,
    answers,
    comments,
    // errors,
    // ui
});
// this is responsible for structuring keys pointing to the action type, that holds the aggregate
// answers, users, questions objects formatted by jbuilder

