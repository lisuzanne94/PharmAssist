import {
    RECEIVE_MEDICATION_ERRORS,
    CLEAR_ERRORS
} from '../actions/medication_actions';

const _nullErrors = [];

const MedicationsErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_MEDICATION_ERRORS:
            return Object.values(action.errors);
        case CLEAR_ERRORS:
            return _nullErrors;
        default:
            return state;
    }
};

export default MedicationsErrorsReducer;