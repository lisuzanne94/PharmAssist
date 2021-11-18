import { connect } from "react-redux";
import DrugInfo from "./drug_info";

const mSTP = (_state, ownProps) => ({
    medication: ownProps.medication
});

export default connect(mSTP)(DrugInfo);
