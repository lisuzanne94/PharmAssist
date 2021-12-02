import { connect } from "react-redux";
import { deleteMedication } from "../../actions/medication_actions";
import { openModal } from "../../actions/modal_actions";
import MedicationList from './medication_list';

const mSTP = (_state, ownProps) => ({
    medications: ownProps.medications
});

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    deleteMedication: medication => dispatch(deleteMedication(medication))
});

export default connect(mSTP, mDTP)(MedicationList);