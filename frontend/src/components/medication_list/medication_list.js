import React from "react";

const MedicationList = ({ medications }) => {


    return (
        <div>
            <ul>
                {
                    medications ? Object.values(medications).map((medication, i) => (
                        <li key={i}>
                            {medication.brandName} {medication.strength}mg
                        </li>
                    )) : null
                }
            </ul>
        </div>
    )
};

export default MedicationList;