import React from 'react';
const axios = require('axios');

class DrugInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentDidMount () {
        this.logData(this.props.medication.brandName)
    }

    logData = brandName => {
        let data = axios.get(`https://api.fda.gov/drug/label.json?search=openfda.brand_name:${brandName}`)
            .then(resp => this.setState({data: resp.data})).catch(err => console.log(err))
        return data;
    }

    //  drugInfo = () => (this.state.data.results && this.state.data.results[0].length > 150)  ? this.state.data.results[0].indications_and_usage[0].slice(0, 150) : null


    render() {
        // this.logData()
        // console.log(this.state.data);
        // this.logData()
        // console.log(this.logData().results)
        // console.log(this.state.data.results ? this.state.data.results[0].information_for_patients : null)
        // console.log(drugInfo() ? drugInfo().length : null)
        // console.log(this.props.medication ? this.props.medication : null)
        return (
            <div>
                {this.state.data.results ? (
                    this.state.data.results[0].indications_and_usage[0].slice(0, 600)
                    ) : null}
            </div>
        )
    }
}

export default DrugInfo;