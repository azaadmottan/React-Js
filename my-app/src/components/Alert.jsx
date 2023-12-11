import React from 'react';

export default function Alert(props) {

    const lower = (word) => {

        let sentence = word.toLowerCase();

        return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.typ} fade show `} role="alert">
            <strong>{lower(props.alert.typ)}</strong>: {props.alert.msg}
        </div>
    )
}


