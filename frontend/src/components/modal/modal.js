import React from 'react';
import { closeModal, openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import MedicationCreateContainer from '../medication_form/medication_create_container';
import DrugInfo from '../drug-info/drug_info';


function Modal({ modal, closeModal }) {
 

  if (!modal) {
    return null;
  }
  let component;
  switch (modal.type) {
    case 'createMedication':
      component = <MedicationCreateContainer />;
      break;
    case 'getDrugInfo':
      component = <DrugInfo medication={modal.medication} />;
      break;
    default:
      return null;
  }

  console.log(modal.medication)

  return (
       <div className="modelbg" onClick={closeModal}>
      <div className="modelc" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapS = state => {
  return {
    modal: state.ui.modal
  };
};

const mapD = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapS, mapD)(Modal);
