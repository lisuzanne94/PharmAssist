import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

const MedicationList = ({ medications, deleteMedication, openModal }) => {


    return (
        <div>
            <ul className="med-list">
                {
                    medications ? Object.values(medications).map((medication, i) => (
                        <li key={i} className="med-list-item">
                            <span className="med-list-name">
                                <span onClick={() => openModal({ type: 'getDrugInfo', medication: medication })}>{medication.brandName}</span> {medication.strength}mg&nbsp;
                            </span>
                            <span className="med-list-sig">{medication.dose === "1" ? "1 time" : `${medication.dose} times`} a day</span>
                            &nbsp;&nbsp;
                            <span className="med-list-btns">
                                <button onClick={() => openModal({type: 'updateMedication', medication: medication})}>
                                    <FontAwesomeIcon icon={faPen} /> Update
                                </button>
                                <button onClick={() => deleteMedication(medication._id) }>
                                    <FontAwesomeIcon icon={faTrash} /> Delete
                                </button>
                            </span>
                        </li>
                    )) : null
                }
            </ul>
        </div>
    )
};

export default MedicationList;