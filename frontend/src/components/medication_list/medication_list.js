import React, { useEffect } from "react";
import Modal from "../modal/modal";

const MedicationList = ({ medications, openModal }) => {


    return (
        <div>
            <ul>
                {
                    medications ? Object.values(medications).map((medication, i) => (
                        <li key={i} onClick={() => openModal({ type: 'getDrugInfo' })}>
                            {medication.brandName} {medication.strength}mg
                        </li>
                    )) : null
                }
            </ul>
        </div>
    )
};

export default MedicationList;