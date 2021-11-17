import React, { useEffect } from "react";
import { fetchMedications } from "../../actions/medication_actions";
import SearchBar from "../searchbar/searchbar";

const MedicationList = ({ medications, currentUserId, fetchMedications }) => {


    return (
        <div>
            <SearchBar/>
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