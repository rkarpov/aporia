import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import question from './question_errors_reducer';

export default combineReducers({
    session,
    question
});
