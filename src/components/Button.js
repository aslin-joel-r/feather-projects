import React from 'react';
import '../App.css'
import './style.css'

const Button = (props) => {
    return (
        <button className={props.className}>
            {props.content} 
        </button>
    );
}

export default Button;