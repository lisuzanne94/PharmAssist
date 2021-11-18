import { connect } from "react-redux";
import DrugInfo from "./drug_info";

const mSTP = (state, ownProps) => ({
    medication: ownProps.medication
});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(DrugInfo);
