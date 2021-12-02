import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/medication_actions';
import { connect } from 'react-redux';
import MedicationCreateContainer from '../medication_form/medication_create_container';
import DrugInfoContainer from '../drug-info/drug_info_container';
import MedicationEditContainer from '../medication_form/medication_edit_container';



function Modal({ modal, closeModal, clearErrors }) {

  if (!modal) {
    return null;
  }

  const clearAndClose = () => {
    closeModal();
    clearErrors();
  }

  let component;
  let modalDiv;
  switch (modal.type) {
    case 'createMedication':
      component = <MedicationCreateContainer />;
      modalDiv = (
        <div className="med-form-modalbg" onClick={clearAndClose}>
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
            <div className="close-modal-btn" onClick={() => closeModal()}>x</div>
            {component}
          </div>
        </div>
        )
      break;
    case 'updateMedication':
      component = <MedicationEditContainer />;
      modalDiv = (
        <div className="med-form-modalbg" onClick={clearAndClose}>
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
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapS, mapD)(Modal);
