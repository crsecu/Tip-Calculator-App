import React from 'react';

export default function Button(props) {

    return (
        <button value = {props.tip} onClick={props.handleClick}>{props.tip} %</button>
    )

}