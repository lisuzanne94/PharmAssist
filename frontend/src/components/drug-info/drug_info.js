import React from 'react';
const axios = require('axios');

class DrugInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            errors: ''
        }
    }

    componentDidMount () {
        this.logData(this.props.medication.brandName)
    }

    logData = brandName => {
        let data = axios.get(`https://api.fda.gov/drug/label.json?search=openfda.brand_name:${brandName}`)
            .then(resp => this.setState({data: resp.data})).catch(err => this.setState({errors: err}))
        return data;
    }

    render() {
        console.log(this.state.errors ? this.state.errors : null)
        return (
            <div>
                {this.state.data.results ? (
                    this.state.data.results[0].indications_and_usage[0].slice(0, 600)
                    ) : null}
                {/* {this.state.errors ? this.state.errors : null} */}
            </div>
        )
    }
}

export default DrugInfo;