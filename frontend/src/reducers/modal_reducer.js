import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

const modalReducer = (oldstate = null, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return action.modal
        case CLOSE_MODAL:
            return null
    
        default:
            return oldstate;
    }
}

export default modalReducer