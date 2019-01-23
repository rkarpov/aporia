import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from '../actions/session_actions'

const initialState = { id: null};

const sessionReducer = (oldState = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id };
        case LOGOUT_CURRENT_USER:
            return initialState;
        default:
            return oldState;
    }
}

export default sessionReducer;