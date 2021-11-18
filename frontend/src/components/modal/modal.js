import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import MedicationCreateContainer from '../medication_form/medication_create_container';
import DrugInfoContainer from '../drug-info/drug_info_container';
import MedicationEditContainer from '../medication_form/medication_edit_container';



function Modal({ modal, closeModal }) {


  
  

  if (!modal) {
    return null;
  }
  let component;
  let modalDiv;
  switch (modal.type) {
    case 'createMedication':
      component = <MedicationCreateContainer />;
      modalDiv = (
        <div className="med-form-modalbg" onClick={closeModal}>
          <div className="med-form-modalc" onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      )
      break;
    case 'getDrugInfo':
      component = <DrugInfoContainer medication={modal.medication} />;
      modalDiv = (
        <div className="drug-info-modalbg" onClick={closeModal}>
          <div className="drug-info-modalc" onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
        )
      break;
    case 'updateMedication':
      component = <MedicationEditContainer />;
      modalDiv = (
        <div className="med-form-modalbg" onClick={closeModal}>
          <div className="med-form-modalc" onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      )
      break;
    default:
      return null;
  }

  return (
    <div>
      {modalDiv}
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
