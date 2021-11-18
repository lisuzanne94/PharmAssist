import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ value }) => {
    const [searchVal, setSearchVal] = useState(value);
    const [className, setClassName] = useState('search-result');
    const [data, setData] = useState([]);

    const update = (e) => {
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

    const toggleClass = () => {
        if (className === 'search-result') {
            setClassName('search-result display-none');
        } else {
            return setClassName('search-result');
        }
    }

    return (
        // <div className='search-container'>
        //     <input className='searchbar' type='text' placeholder='Search for brand name medication' onChange={(e) => {update(e)}} value={searchVal} />
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
                                <li className={className} onClick={() => {handleChange(capitalized); toggleClass()} } key={idx}><span className=''>{capitalized}</span></li>
                            )})
                    : null
                }
            </div>
        // </div>
    )
};

export default SearchBar;