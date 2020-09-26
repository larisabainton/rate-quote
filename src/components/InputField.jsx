import { propertyType, occupancy } from './enum';
import React from 'react';

const variableType = {
    dropDown: {
        propertyType,
        occupancy,
    },
    financial: {
        loanSize: '$'
    }
}

const displayInput = (value, variableName, onChange) => {
    if (variableType.dropDown[variableName]) {
        return (
            <select name={variableName} onChange={onChange} defaultValue={value}>
                {Object.values(variableType.dropDown[variableName]).map((optionName, id) => <option key={id}>{optionName}</option>)}
            </select>)

    } else if (variableType.financial[variableName]) {
        return <input value={value} onChange={onChange}/>

    } else {
        return <input value={value} onChange={onChange}/>
    }
}

export default function InputField(props) {
    return(
        <div className={props.variableName}>
            {props.labelName} {displayInput(props.value, props.variableName, props.onChange)}
        </div>
    )
}