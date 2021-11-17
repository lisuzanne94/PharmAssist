import * as APIUtil from '../util/medication_api_util';

export const RECEIVE_USER_MEDICATIONS = 'RECEIVE_USER_MEDICATIONS';
export const RECEIVE_MEDICATION = 'RECEIVE_MEDICATION';
export const REMOVE_MEDICATION = 'REMOVE_MEDICATION';
export const RECEIVE_MEDICATION_ERRORS = 'RECEIVE_MEDICATION_ERRORS';
export const CLEAR_MEDICATIONS = 'CLEAR_MEDICATIONS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveUserMedications = medications => ({
    type: RECEIVE_USER_MEDICATIONS,
    medications
});

export const receiveMedication = medication => ({
    type: RECEIVE_MEDICATION,
    medication
});

export const removeMedication = medId => ({
    type: REMOVE_MEDICATION,
    medId
})

export const receiveErrors = errors => ({
    type: RECEIVE_MEDICATION_ERRORS,
    errors
});

export const clearMedications = () => ({
    type: CLEAR_MEDICATIONS
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
});

export const fetchMedications = userId => dispatch => (
    APIUtil.getUserMedications(userId)
        .then(medications => {
            dispatch(receiveUserMedications(medications));
            dispatch(clearErrors());
        })
        .catch(err => dispatch(receiveErrors(err.response.data)))
);

export const fetchMedication = medId => dispatch => (
    APIUtil.getMedication(medId)
        .then(medication => {
            dispatch(receiveMedication(medication));
            dispatch(clearErrors());
        })
        .catch(err => dispatch(receiveErrors(err.response.data)))
);

export const createMedication = data => dispatch => (
    APIUtil.createMedication(data)
        .then(medication => {
            dispatch(receiveMedication(medication));
            dispatch(clearErrors());
        })
        .catch(err => dispatch(receiveErrors(err.response.data)))
);

export const editMedication = (data) => dispatch => (
    APIUtil.editMedication(data)
        .then(medication => {
            dispatch(receiveMedication(medication));
            dispatch(clearErrors());
        })
        .catch(err => dispatch(receiveErrors(err.response.data)))
);

export const deleteMedication = medId => dispatch => (
    APIUtil.deleteMedication(medId)
        .then(() => {
            dispatch(removeMedication(medId));
            dispatch(clearErrors());
        })
        .catch(err => dispatch(receiveErrors(err.response.data)))
);