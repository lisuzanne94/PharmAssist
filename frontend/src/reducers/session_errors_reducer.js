import {
    RECEIVE_SESSION_ERRORS,
    CLEAR_ERRORS,
} from '../actions/session_actions';

const _nullErrors = [];

const SessionErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return _nullErrors;
        default:
            return state;
    }
};

export default SessionErrorsReducer;