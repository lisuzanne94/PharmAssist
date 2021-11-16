import {
    RECEIVE_USER_MEDICATIONS,
    RECEIVE_MEDICATION,
    REMOVE_MEDICATION
} from "../actions/medication_actions";

const MedicationsReducer = (prevState = {}, action) => {
    Object.freeze(prevState);
    let nextState = Object.assign({}, prevState);

    switch (action.type) {
        case RECEIVE_USER_MEDICATIONS:
            return action.medications.data;
        case RECEIVE_MEDICATION:
            nextState[action.medications.id] = action.medication;
            return nextState;
        case REMOVE_MEDICATION:
            delete nextState[action.medId]
            return nextState
        default:
            return prevState;
    }
}

export default MedicationsReducer;