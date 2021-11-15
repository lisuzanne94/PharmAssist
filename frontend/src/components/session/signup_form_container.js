import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mSTP = state => ({
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
});

const mDTP = dispatch => ({
    signup: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(SignupForm);