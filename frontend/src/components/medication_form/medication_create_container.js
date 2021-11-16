import { connect } from 'react-redux';
import MedicationCreateForm from './medication_create_form'
import { openModal, closeModal } from '../../actions/modal_actions';

const mapS = state => ({
    errors: state.errors.medication
})

const mapD = dispatch => ({
     openModal: () => dispatch(openModal('createMedication')),
     closeModal: () => dispatch(closeModal())
})

export default connect(mapS, mapD)(MedicationCreateForm)
