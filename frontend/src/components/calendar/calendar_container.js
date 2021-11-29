import { connect } from "react-redux";
import Calendar from "./calendar";
import { openModal } from "../../actions/modal_actions";

const mSTP = state => ({
    medications: Object.values(state.entities.medications)
});

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(Calendar);