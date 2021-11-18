import { connect } from 'react-redux';
import { login, logout, clearErrors } from '../../actions/session_actions';

import NavBar from './navbar';

const mSTP = state => ({
    loggedIn: state.session.isAuthenticated
});

const mDTP = dispatch => ({
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(NavBar);