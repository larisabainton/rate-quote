import Quote from './Quote';
import React from 'react';

export default function Quotes(props) {
    return(
        <table className='quotes-display'>
            <thead>
                <tr>
                    <th>LENDER</th>
                    <th>PRODUCT</th>
                    <th>RATE</th>
                    <th>CLOSING COSTS</th>
                    <th>MONTHLY PAYMENT</th>
                    <th>APR</th>
                </tr>
            </thead>
            <tbody>
                {props.rateQuotes.map((quote, i) => <Quote data={quote} key={i}/>)}
            </tbody>
        </table>
    )
}