import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import MedicationsErrorsReducer from './medications_errors_reducer';

export default combineReducers({
    session: SessionErrorsReducer,
    medications: MedicationsErrorsReducer
});