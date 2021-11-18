import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faCapsules } from '@fortawesome/free-solid-svg-icons'

const MedicationList = ({ medications, deleteMedication, openModal }) => {


    return (
        <div>
            <ul className="med-list">
                {
                    medications ? Object.values(medications).map((medication, i) => (
                        <li key={i} className="med-list-item">
                            <div className="med-list-text" onClick={() => openModal({ type: 'getDrugInfo', medication: medication })}>
                                <FontAwesomeIcon icon={faCapsules} className="pill-icon" />&nbsp;
                                <span className="med-list-name">
                                    <span>{medication.brandName}</span> {medication.strength}mg&nbsp;
                                </span>
                                <span className="med-list-sig">{medication.frequency === "1" ? "1 time" : `${medication.frequency} times`} a day</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div className="med-list-btns">
                                <button onClick={() => openModal({type: 'updateMedication', medication: medication})}>
                                    <FontAwesomeIcon icon={faPen} /> Update
                                </button>
                                <button onClick={() => deleteMedication(medication._id) }>
                                    <FontAwesomeIcon icon={faTrash} /> Delete
                                </button>
                            </div>
                        </li>
                    )) : null
                }
            </ul>
        </div>
    )
};

export default MedicationList;