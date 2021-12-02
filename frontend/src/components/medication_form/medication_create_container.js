import { connect } from 'react-redux';
import MedicationCreateForm from './medication_create_form'
import { closeModal } from '../../actions/modal_actions';
import { createMedication, clearErrors } from '../../actions/medication_actions'

const mapS = state => ({
    currentUser: state.session.user.id,
    errors: state.errors.medications
})

const mapD = dispatch => ({
    createMedication: (medication) => dispatch(createMedication(medication)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: (modal) => dispatch(closeModal(modal))
})

export default connect(mapS, mapD)(MedicationCreateForm)
