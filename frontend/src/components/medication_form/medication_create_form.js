import React, { useState, useEffect } from "react";
import axios from 'axios';
import { query } from "express";

const MedicationCreateForm = ({ errors }) => {
    const [state, setState] = useState({
        dose: '',
        frequency: '',
        strength: '',
        duration: '',
        startDate: '',
    })

    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState({})

    const useEffect = (async () => {
        const result = await axios(`https://api.fda.gov/drug/label.json?search=openfda.brand_name:${query}`)
        return () => {
            cleanup
        }
    }, []);

    const handleSubmit = () => ({
        
    })

    const update = field => {
        return event => {
            setState({[field]: event.currentTarget.value})
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Brand Name</h1>
                <input type="text" value={data.brandName} onChange={update('brandName')}/>
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
            </form>
        </div>
    )
}