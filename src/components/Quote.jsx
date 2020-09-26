import React from 'react';

export default function Quote(props) {
    const {
        apr,
        closingCosts,
        interestRate,
        lenderName,
        loanType,
        monthlyPayment
    } = props.data

    return (
        <tr>
            <td>{lenderName}</td>
            <td>{loanType}</td>
            <td>{`${interestRate.toFixed(2)}%`}</td>
            <td>{`$${parseInt(closingCosts).toLocaleString('en')}`}</td>
            <td>{`$${parseInt(monthlyPayment).toLocaleString('en')}`}</td>
            <td>{`${apr.toFixed(2)}%`}</td>
        </tr>
    )
}