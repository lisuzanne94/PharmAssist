import { connect } from 'react-redux';
import MedicationCreateForm from './medication_create_form'
import { closeModal } from '../../actions/modal_actions';
import { createMedication } from '../../actions/medication_actions'

const mapS = state => ({
    errors: state.errors.medications
})

const mapD = dispatch => ({
    createMedication: (medication) => dispatch(createMedication(medication)),
    closeModal: (modal) => dispatch(closeModal(modal))
})

export default connect(mapS, mapD)(MedicationCreateForm)
