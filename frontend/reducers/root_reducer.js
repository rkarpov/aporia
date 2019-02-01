import { combineReducers } from 'redux';
import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';

const rootReducer = combineReducers({
    entities, // key of entitites ppointing to return value of entities reducer. 
    // shapes entities key in states
    session,
    errors,
    ui
});

export default rootReducer;