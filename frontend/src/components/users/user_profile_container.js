import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { logout } from '../../actions/session_actions';

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(null, mDTP)(UserProfile)