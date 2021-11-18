import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MedicationList = ({ medications, deleteMedication, openModal }) => {

    return (
        <div>
            <ul className="med-list">
                {
                    medications ? Object.values(medications).map((medication, i) => (
                        <li key={i} className="med-list-item">
                            <div className="med-list-text" onClick={() => openModal({ type: 'getDrugInfo', medication: medication })}>
                                <span className="med-list-name">
                                    <span>{medication.brandName}</span> {medication.strength}mg&nbsp;
                                </span>
                                <span className="med-list-sig">
                                    {medication.frequency === "1" ? "1 time" : `${medication.frequency} times`} a day {!medication.duration ? '' : `for ${medication.duration} days`}
                                </span>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div className="med-list-btns">
                                <button onClick={() => openModal({type: 'updateMedication', medication: medication})}>
                                    Update
                                </button>
                                &nbsp;
                                <button onClick={() => deleteMedication(medication._id) }>
                                    Delete
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