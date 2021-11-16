import modal from "./modal_reducer";
import { combineReducers } from 'redux';

const uiReducer = combineReducers({
    modal
})

export default uiReducer;