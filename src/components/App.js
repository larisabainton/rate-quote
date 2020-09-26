import React from 'react';
import Input from './Input';
import Quotes from './Quotes';
import { propertyType, occupancy } from './enum';

const url = 'https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loanSize: '450000',
            creditScore: '680',
            propertyType: propertyType.singleFamily,
            occupancy: occupancy.primary,
            rateQuotes: [],
        }
    }

    componentDidMount() {
        this.handleClick();
    }

    handleClick() {
        const { 
            loanSize, 
            creditScore, 
            propertyType, 
            occupancy 
        } = this.state;

        return fetch(`${url}?loanSize=${loanSize}&creditScore=${creditScore}&propertyType=${propertyType}&occupancy=${occupancy}`, {
                method: 'GET',
                headers: {
                    'Authorization': `OU-AUTH ${process.env.REACT_APP_API_KEY}`,
                }
            }).then(response => response.json())
            .then((data) => this.setState({ rateQuotes: data.rateQuotes }))
     }

    handleChange(e, variable) {
        this.setState({[variable]: e.target.value});
    }

    render() {
        return (
        <div className="App">
            <Input 
                variables = {{
                    loanSize: {
                        value: this.state.loanSize,
                        text: 'Loan Size'
                    },
                    creditScore: {
                        value: this.state.creditScore,
                        text: 'Credit Score'
                    },
                    propertyType: {
                        value: this.state.propertyType,
                        text: 'Property Type'
                    },
                    occupancy: {
                        value: this.state.occupancy,
                        text: 'Occupancy'
                    },
                }}
                onClick = {this.handleClick.bind(this)}
                onChange = {this.handleChange.bind(this)}
            />
            <Quotes 
                rateQuotes = {this.state.rateQuotes}
            />
        </div>
        );
    }
}

export default App;
