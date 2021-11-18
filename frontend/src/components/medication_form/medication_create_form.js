import React, { useState } from "react";
import SearchBar from "../searchbar/searchbar";
import axios from "axios";


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
    const [searchVal, setSearchVal] = useState('');
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);

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

    const handleChange = (option) => {
        setSearchVal(option);
    };

    const toggleShow = () => {
        if (show) {
            setShow(false);
        } else {
            setShow(true);
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
                        <input className='searchbar' type='text' placeholder='Search for brand name medication' onChange={(e) => {changeSearchVal(e); update('brandName')}} value={searchVal} />
                        <div>
                            {
                                data.displayTermsList ?
                                    data.displayTermsList.term.filter(val => {
                                        if (searchVal === '') {
                                            return '';
                                        } else if (val.toLowerCase().startsWith(searchVal.toLowerCase()) && (!val.includes('(') && !val.includes('/ '))) {
                                            return val;
                                        }
                                    }).map((val, idx) => {
                                        let capitalized = val[0].toUpperCase() + val.slice(1).toLowerCase();
                                        return (
                                            <li className={className} onClick={() => { handleChange(capitalized); show ? toggleShow() : null } } key={idx}><span className=''>{capitalized}</span></li>
                                        )})
                                : null
                            }
                        </div>
                    </div>
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