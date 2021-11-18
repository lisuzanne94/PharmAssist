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

    const handleSubmit = (e) => {
        e.preventDefault()
        createMedication(state).then(closeModal())
    }

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
                <div className='wrapper'>
                    <SearchBar brandName={state.brandName} change={update('brandName')}/>
                </div>
                <br />
                <h1>Dose</h1>
                <input type="text" placeholder='Enter a number (ex. 1 for 1 tablet)' value={state.dose} onChange={update('dose')}/>
                <br /><br/>
                <h1>Frequency</h1>
                <input type="text" placeholder='Enter a number (ex. 1 for once a day)' value={state.frequency} onChange={update('frequency')}/>
                <br /><br/>
                <h1>Strength</h1>
                <input type="text" placeholder='Enter a number (ex. 10 for 10 mg)' value={state.strength} onChange={update('strength')}/>
                <br /><br/>
                <h1>Duration</h1>
                <input type="text" placeholder='Enter the day supply of your medication' value={state.duration} onChange={update('duration')}/>
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