import { connect } from "react-redux";
import Calendar from "./calendar";

const mSTP = state => ({
    medications: Object.values(state.entities.medications)
});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(Calendar);