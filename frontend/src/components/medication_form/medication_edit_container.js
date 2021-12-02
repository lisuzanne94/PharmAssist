import { connect } from 'react-redux';
import MedicationEditForm from './medication_edit_form'
import { editMedication } from '../../actions/medication_actions'

const mapS = state => ({
    currentUser: state.session.user.id,
    medication: state.ui.modal.medication,
    errors: state.errors.medications
});

const mapD = dispatch => ({
    editMedication: (medication) => dispatch(editMedication(medication))
});

export default connect(mapS, mapD)(MedicationEditForm);