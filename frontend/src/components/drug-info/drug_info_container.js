import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import DrugInfo from "./drug_info";

const mSTP = (_state, ownProps) => ({
    medication: ownProps.medication
});

const mDTP = dispatch => ({
    // closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(DrugInfo);
