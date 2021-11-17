import React from 'react';
const axios = require('axios');

class DrugInfo extends React.Component {

    logData = async () => {
        let resp = await axios.get('https://api.fda.gov/drug/label.json?search=openfda.brand_name:LIPITOR')
        // .then(resp => { return resp.data }).catch(err => console.log(err))
        let data = resp.data;
        return data.results[0].description[0];
    }

    render() {
        // console.log(this.logData());
        return (
            <div>
                {"hi"}
            </div>
        )
    }
}

export default DrugInfo;