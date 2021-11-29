import React, { useState } from "react";
import axios from "axios";


const MedicationCreateForm = ({ currentUser, errors, createMedication, closeModal }) => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = (today.getMonth() + 1).toString().padStart(2, '0');
    const dd = (today.getDate()).toString().padStart(2, '0');
    const todayDate = yyyy + '-' + mm + '-' + dd;

    const [state, setState] = useState({
        currentUser: currentUser,
        brandName: '',
        dose: '',
        frequency: '',
        strength: '',
        duration: '',
        startDate: todayDate,
    })
    const [searchVal, setSearchVal] = useState('');
    const [data, setData] = useState([]);
    const [className, setClassName] = useState('search-result');

    const handleSubmit = (e) => {
        e.preventDefault();
        createMedication(state).then(closeModal());
    }

    const update = field => {
        return event => {
            setState(prevProps => ({
                ...prevProps,
                [field]: event.target.value
            }));
        }
    }

    const changeSearchVal = (e) => {
        setSearchVal(e.target.value);
        if (searchVal && searchVal.length > 3) {
            axios.get(`https://rxnav.nlm.nih.gov/REST/Prescribe/displaynames.json`)
            .then(res => setData(res.data))
            .catch(err => console.log(err.response.data));
        } else {
            setData([]);
        }
    };

    const handleClick = (capitalized, field) => {
        if (className === 'search-result') {
            setClassName('search-result display-none');
        } else {
            setClassName('search-result')
        }
        setSearchVal(capitalized);
        return setState(prevProps => ({
            ...prevProps,
            [field]: capitalized
        }));
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Backspace') {
            setClassName('search-result');
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
                    <div className='search-container'>
                        <input className='searchbar' type='text' placeholder='Search for brand name medication' onKeyDown={(e) => handleKeyDown(e)} onChange={(e) => {changeSearchVal(e)}} value={searchVal} />
                        <div>
                            {
                                data.displayTermsList ?
                                    data.displayTermsList.term.filter(val => {
                                        if (searchVal === '') {
                                            return searchVal;
                                        } else if (val.toLowerCase().startsWith(searchVal.toLowerCase()) && (!val.includes('(') && !val.includes('/ '))) {
                                            return val;
                                        }
                                    }).map((val, idx) => {
                                        let capitalized = val[0].toUpperCase() + val.slice(1).toLowerCase();
                                        return (
                                            <li className={className} onClick={(e) => handleClick(capitalized, 'brandName')} key={idx}>{capitalized}</li>
                                        )})
                                : null
                            }
                        </div>
                    </div>
                </div>
                <br />
                <h1>Strength</h1>
                <input type="text" placeholder='Enter the medication strength (ex. 10 for 10 mg)' value={state.strength} onChange={update('strength')}/>
                <br /><br/>
                <h1>Dose</h1>
                <input type="text" placeholder='Enter the number of tablets a day (ex. 1 for 1 tablet)' value={state.dose} onChange={update('dose')}/>
                <br /><br/>
                <h1>Frequency</h1>
                <input type="text" placeholder='Enter the number of times a day (ex. 1 for once a day)' value={state.frequency} onChange={update('frequency')}/>
                <br /><br/>
                <h1>Duration</h1>
                <input type="text" placeholder='Enter the day supply of your medication' value={state.duration} onChange={update('duration')}/>
                <br /><br/>
                <h1>Start Date</h1>
                <input type="date" value={todayDate} onChange={update('startDate')}/>
                <br /><br/>
                <input className='submit-form-button' type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default MedicationCreateForm;