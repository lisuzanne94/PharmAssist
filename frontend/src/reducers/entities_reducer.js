import { combineReducers } from 'redux';
import medications from './medications_reducer';

const EntitiesReducer = combineReducers({
    medications
});

export default EntitiesReducer;