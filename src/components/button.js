import React from 'react';

export default function Button(props) {

    return (
        <button id = {props.id} value = {props.tip} onClick={props.handleClick} name={props.name}>{props.tip} %</button>
    )

}