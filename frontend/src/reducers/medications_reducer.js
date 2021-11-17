import {
    RECEIVE_USER_MEDICATIONS,
    RECEIVE_MEDICATION,
    REMOVE_MEDICATION,
    CLEAR_MEDICATIONS
} from "../actions/medication_actions";

const MedicationsReducer = (prevState = {}, action) => {
    Object.freeze(prevState);
    let nextState = Object.assign({}, prevState);

    switch (action.type) {
        case RECEIVE_USER_MEDICATIONS:
            action.medications.data.forEach(medication => (
                nextState[medication._id] = medication
            ));
            return nextState;
        case RECEIVE_MEDICATION:
            nextState[action.medication.data._id] = action.medication.data;
            return nextState;
        case REMOVE_MEDICATION:
            delete nextState[action.medId]
            return nextState
        case CLEAR_MEDICATIONS:
            return {};
        default:
            return prevState;
    }
}

export default MedicationsReducer;