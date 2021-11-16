import { connect } from 'react-redux';
import { openModal} from '../../actions/modal_actions';
import test from './test'

const mapS = state => ({
    errors: state.errors.medications
})

const mapD = dispatch => ({
    
    openModal: (modal) => dispatch(openModal(modal))
    
})

export default connect(mapS, mapD)(test)