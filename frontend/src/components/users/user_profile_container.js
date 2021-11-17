import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchMedications } from '../../actions/medication_actions';

const mSTP = state => ({
    currentUserId: state.session.user.id,
    medications: state.entities.medications
})

const mDTP = dispatch => ({
    fetchMedications: userId => dispatch(fetchMedications(userId)),
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(UserProfile)