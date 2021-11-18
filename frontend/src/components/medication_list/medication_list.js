import React, { useEffect } from "react";
import { fetchMedications } from "../../actions/medication_actions";
import SearchBar from "../searchbar/searchbar";


const MedicationList = ({ medications, deleteMedication, openModal }) => {


    return (
        <div>
            <ul>
                {
                    medications ? Object.values(medications).map((medication, i) => (
                        <li key={i}>
                            <span onClick={() => openModal({ type: 'getDrugInfo', medication: medication })}>{medication.brandName[0].toUpperCase() + medication.brandName.slice(1).toLowerCase()}</span> {medication.strength}mg
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