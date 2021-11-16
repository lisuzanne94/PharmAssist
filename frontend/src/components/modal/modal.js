import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import MedicationCreateContainer from '../medication_form/medication_create_container';


function Modal({modal, closeModal}) {
 

  if (!modal) {
    return null;
  }
  const component;
  switch (modal.type) {
    case 'createMedication':
      component = <MedicationCreateContainer />;
      break;
    default:
      return null;
  }
  return (
    <div onClick={closeModal}>
      <div onClick={event => event.stopPropagation()}>
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
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapS, mapD)(Modal);
