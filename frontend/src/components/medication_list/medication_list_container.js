import { connect } from "react-redux";
import { fetchMedications } from "../../actions/medication_actions";
import { openModal } from "../../actions/modal_actions";
import MedicationList from './medication_list';

const mSTP = (state, ownProps) => ({
    medications: ownProps.medications
});

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(MedicationList);