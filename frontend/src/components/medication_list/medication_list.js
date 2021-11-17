import React, { useEffect } from "react";


const MedicationList = ({ medications, deleteMedication, openModal }) => {


    return (
        <div>
            <ul>
                {
                    medications ? Object.values(medications).map((medication, i) => (
                        <li key={i}>
                            {medication.brandName} {medication.strength}mg
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