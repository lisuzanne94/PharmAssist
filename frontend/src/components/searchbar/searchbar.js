import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchBar = ({ brandName, change }) => {
    const [searchVal, setSearchVal] = useState('');
    const [data, setData] = useState([]);

    const update = (value) => {
        setSearchVal(value);
        if (searchVal && searchVal.length > 3) {
            axios.get(`https://rxnav.nlm.nih.gov/REST/Prescribe/displaynames.json`)
            .then(res => setData(res.data))
            .catch(err => console.log(err.response.data));
        } else {
            setData([]);
        }
    };

    return (
        <div className='search-container'>
            <input className='searchbar' type='text' placeholder='Search for brand name medication' onChange={(e) => {change(e); update(brandName)}} value={brandName} />
            <div>
                <ul>
                    {
                        data.displayTermsList ? data.displayTermsList.term.filter(val => {
                            if (searchVal === '') {
                                return val;
                            } else if (val.toLowerCase().startsWith(searchVal.toLowerCase()) && (!val.includes('(') && !val.includes('/ '))) {
                                return val;
                            }
                        }).slice(0, 5).map((val, idx) => {
                            if (searchVal.length) {
                                return (<li className='search-result' key={idx}>{val[0].toUpperCase() + val.slice(1).toLowerCase()}</li>)
                            }
                        }) : null
                    }
                </ul>
            </div>
        </div>
    )
};

export default SearchBar;