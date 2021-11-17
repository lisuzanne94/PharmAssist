import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
    const [searchVal, setSearchVal] = useState('');
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     const loadMeds = async () => {
    //         const response = await axios.get(`https://api.fda.gov/drug/label.json?search=openfda.brand_name:${searchVal}&limit=5`);
    //         console.log(response.data)
    //     }
    //     loadMeds();
    // }, [])

    const update = value => {
        setSearchVal(value);
        if (searchVal && searchVal.length > 3) {
            axios.get(`https://rxnav.nlm.nih.gov/REST/Prescribe/displaynames.json`)
            .then(res => setData(res.data))
            .catch(err => console.log(err.response.data));
        } else {
            setData([]);
        }
    };

    // const getVal = (value) => {
    //     axios.get(`https://api.fda.gov/drug/label.json?search=openfda.route:'oral'+AND+openfda.generic_name:${value}&limit=10`)
    //     .then(res => setData(res.data))
    // }

    // const handleChange = (value) => {
    //     setSearchVal(value);
    //     if (searchVal && searchVal.length > 1) {
    //         if (searchVal.length % 2 === 0) {
    //             getVal(value);
    //         }
    //     }
    // }

    return (
        <div>
            <input className='searchbar' type='text' placeholder='Search for brand name medication' onChange={(e) => update(e.target.value)} value={searchVal} />
            <div>
                <ul>
                    {
                        data.displayTermsList ? data.displayTermsList.term.filter(val => {
                            if (searchVal === '') {
                                return '';
                            } else if (val.toLowerCase().includes(searchVal.toLowerCase()) && (!val.includes('(') && !val.includes('/ '))) {
                                return val;
                            }
                        }).slice(0, 5).map((val, idx) => {
                            if (searchVal.length > 4) {
                                return (<li className='user-medication-list-item' key={idx}>{val[0].toUpperCase() + val.slice(1).toLowerCase()}</li>)
                            } else { return null }
                        }) : null
                    }
                </ul>
            </div>
        </div>
    )
};

export default SearchBar;