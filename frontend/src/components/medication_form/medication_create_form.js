import React, { useState } from "react";
import SearchBar from "../searchbar/searchbar";


const MedicationCreateForm = ({ currentUser, errors, createMedication, closeModal }) => {
    const [state, setState] = useState({
        currentUser: currentUser,
        brandName: '',
        dose: '',
        frequency: '',
        strength: '',
        duration: '',
        startDate: '',
    })

    // const [data, setData] = useState({ brandName: '', hits: [] });
    // const [query, setQuery] = useState({})

    // const useEffect = (async () => {
    //     const result = await axios(`https://api.fda.gov/drug/label.json?search=openfda.brand_name:${query}`)
    //     return () => {
    //         cleanup
    //     }
    // }, []);

    const handleSubmit = () => (
        createMedication(state)
    )

    const update = field => {
        return event => {   
            setState(prevProps => ({
            ...prevProps,
            [field]: event.target.value
        }));
        }
    }

    return (
        <div className='modal-container'>
            {
                errors ? errors.map((error, i) => (
                    <li key={i}>
                        {error}
                    </li>
                )) : null
            }

            <h1 className='add-med-header'>Add New Medication</h1><br/><br/>
            <form className='modal-form' onSubmit={handleSubmit}>
                <h1>Brand Name</h1>
                <div className='search-container'>
                <SearchBar value={state.brandName} onChange={update('brandName')}/>
                </div>
                <br />
                <h1>Dose</h1>
                <input type="text" value={state.dose} onChange={update('dose')}/>
                <br /><br/>
                <h1>Frequency</h1>
                <input type="text" value={state.frequency} onChange={update('frequency')}/>
                <br /><br/>
                <h1>Strength</h1>
                <input type="text" value={state.strength} onChange={update('strength')}/>
                <br /><br/>
                <h1>Duration</h1>
                <input type="text" value={state.duration} onChange={update('duration')}/>
                <br /><br/>
                <h1>Start Date</h1>
                <input type="date" value={state.startDate} onChange={update('startDate')}/>
                <br /><br/>
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default MedicationCreateForm;