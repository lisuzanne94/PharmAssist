import React from 'react';
const axios = require('axios');

class DrugInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            error: null
        }
    }

    componentDidMount () {
        this.logData(this.props.medication.brandName)
    }

    logData = brandName => {
        let data = axios.get(`https://api.fda.gov/drug/label.json?search=openfda.brand_name:${brandName}`)
            .then(resp => this.setState({data: resp.data}))
            .catch(() => this.setState({error: 'Drug not found!'}))
            .catch(err => console.log(err))
        return data;
    }

    render() {
        return (
            <div>
                <div className="drug-info-brand">{this.props.medication.brandName}</div>
                {this.state.data.results ? (
                    `${this.state.data.results[0].indications_and_usage[0].slice(0, 600)}...`
                    ) : null}
                {this.state.error ? this.state.error : null}
            </div>
        )
    }
}

export default DrugInfo;