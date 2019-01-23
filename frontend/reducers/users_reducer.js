import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'


const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge(newState,
                 { [action.currentUser.id]: action.currentUser }
            );
        default:
            return oldState
    }
}

export default usersReducer;