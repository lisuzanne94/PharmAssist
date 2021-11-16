import React, { useState } from "react";


const MedicationCreateForm = ({ errors, createMedication, closeModal }) => {
    const [state, setState] = useState({
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
        createMedication(state).then(closeModal())
    )

    const update = field => {
        return event => {
            setState({[field]: event.currentTarget.value})
        }
    }

    console.log("hi")

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Brand Name</h1>
                <input type="text" value={state.brandName} onChange={update('brandName')}/>
                <br />
                <h1>Dose</h1>
                <input type="text" value={state.dose} onChange={update('dose')}/>
                <br />
                <h1>Frequency</h1>
                <input type="text" value={state.frequency} onChange={update('frequency')}/>
                <br />
                <h1>Strength</h1>
                <input type="text" value={state.strength} onChange={update('strength')}/>
                <br />
                <h1>Duration</h1>
                <input type="text" value={state.duration} onChange={update('duration')}/>
                <br />
                <h1>Start Date</h1>
                <input type="date" value={state.startDate} onChange={update('startDate')}/>
                <br />
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default MedicationCreateForm;