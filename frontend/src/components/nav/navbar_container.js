import { connect } from 'react-redux';
import { logout, clearErrors } from '../../actions/session_actions';

import NavBar from './navbar';

const mSTP = state => ({
    loggedIn: state.session.isAuthenticated
});

export default connect(mSTP, { logout, clearErrors })(NavBar);