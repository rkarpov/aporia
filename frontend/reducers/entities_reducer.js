import { combineReducers } from 'redux';
import users from './users_reducer';
import questions from './questions_reducer';
import answers from './answers_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';

export default combineReducers({
    users,
    questions,
    answers,
    errors,
    ui
});

