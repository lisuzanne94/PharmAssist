import { connect } from "react-redux";
import MedicationList from './medication_list';

const mSTP = (state, ownProps) => ({
    medications: ownProps.medications
});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(MedicationList);