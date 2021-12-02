import React from "react";

const MedicationList = ({ medications, deleteMedication, openModal }) => {
    return (
        <div className="medication-list-container">
            <ul className='medication-list'>
                {
                    medications ? Object.values(medications).map((medication, i) => (

                        <li key={i} className='medication'>
                            <span className='medication-name'><span className='medication-name-calendar' onClick={() => openModal({ type: 'getDrugInfo', medication: medication })}>{medication.brandName[0].toUpperCase() + medication.brandName.slice(1).toLowerCase()}</span> {medication.strength}mg {medication.frequency === "1" ? "1 time" : `${medication.frequency} times`} a day {!medication.duration ? '' : `for ${medication.duration} days`}</span>
                            <input type="submit" value="Update" onClick={() => openModal({type: 'updateMedication', medication: medication})} />
                            <input type="submit" value="Delete" onClick={() => deleteMedication(medication._id) } />
                        </li>
                    )) : null
                }
            </ul>
        </div>
    )
};

export default MedicationList;