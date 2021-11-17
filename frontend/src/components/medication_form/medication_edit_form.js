import React, { useState } from "react";


const MedicationEditForm = ({ medication, errors, editMedication, closeModal }) => {
    const [state, setState] = useState({
        user: medication.user,
        brandName: medication.brandName,
        dose: medication.dose,
        frequency: medication.frequency,
        strength: medication.strength,
        duration: medication.duration,
        startDate: medication.startDate,
        _id: medication._id
    })

    

    const handleSubmit = (e) => {
        e.preventDefault()
        editMedication(state).then(closeModal())
    }

    const update = field => {
        return event => {   
            setState(prevProps => ({
            ...prevProps,
            [field]: event.target.value
        }));
        }
    }

    console.log(medication)
    console.log(state)


    return state ? (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Brand Name</h1>
                <input type="text" defaultValue={state.brandName} onChange={update('brandName')}/>
                <br />
                <h1>Dose</h1>
                <input type="text" defaultValue={state.dose} onChange={update('dose')}/>
                <br />
                <h1>Frequency</h1>
                <input type="text" defaultValue={state.frequency} onChange={update('frequency')}/>
                <br />
                <h1>Strength</h1>
                <input type="text" defaultValue={state.strength} onChange={update('strength')}/>
                <br />
                <h1>Duration</h1>
                <input type="text" defaultValue={state.duration} onChange={update('duration')}/>
                <br />
                <h1>Start Date</h1>
                <input type="date" defaultValue={state.startDate} onChange={update('startDate')}/>
                <br />
                <input type='submit' value='Update' />
            </form>
        </div>
    ) : null
}

export default MedicationEditForm;
