import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div onClick={props.click} className="Person">
            <p>I am a Person : {props.name}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    )
}

export default person;