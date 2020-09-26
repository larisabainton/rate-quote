import React from 'react';
import InputField from './InputField';

export default function Input(props) {
    return (
        <div className='input'>
            {Object.keys(props.variables).map((variableName, id) => 
                <InputField 
                    onChange={(e) => props.onChange(e, variableName)} 
                    variableName={variableName}
                    value={props.variables[variableName].value}
                    labelName={props.variables[variableName].text}
                    key={id}
                />)}
            <button onClick={props.onClick}> Quote Rates </button>
        </div>
    )
}