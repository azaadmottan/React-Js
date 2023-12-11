import React, { useState } from 'react'

export default function TextForm(props) {

    // const [text, setValue] = useState("Enter value here...");
    const [text, setValue] = useState("");

    const handleInput = (event) => {

        let inputValue = event.target.value; 
        setValue(inputValue);

    }

    const handleUpClick = () => {
        if (text.length === 0) {

            // setValue ("Please enter text here ...")
            props.showAlert('Please enter text in the input-field !', 'danger');
        }
        else {
            
            let newValue = text.toUpperCase();
            setValue (newValue);
            
        }
    }

    const handleDownClick = () => {

        if (text.length === 0) {

            // setValue ("Please enter text here ...");
            props.showAlert('Please enter text in the input-field !', 'danger');

        }
        else {

            setValue (text.toLowerCase());
        }
    }

    const handleSpaceClick = () => {
        let newText = text.split(/[ ]+/);

        setValue (newText.join(' '));
    }

    return (
        <>
            <div className={`text-${props.mode === 'light' ? 'black' : 'white'}`}>
            <h2 className="my-4">{props.heading}</h2>

            <textarea className="form-control shadow-none fs-5" style={{backgroundColor: props.mode === 'light' ? 'white' : '#eef2f3'}} value={text} onChange={handleInput} placeholder="Enter text here" rows="6"></textarea>

            <h6 className="my-2">Text Counter : {text.split(" ").filter((element) => element.length !== 0).length} words | {text.length} letters | {0.008 * text.split("").length} minutes required to read.</h6>

            <button className="btn btn-primary my-3 " onClick={handleUpClick}>To Uppercase</button>
            <button className="btn btn-primary my-3 m-sm-2 m-1" onClick={handleDownClick}>To Lowercase</button>
            <button className="btn btn-primary my-3 " onClick={handleSpaceClick}>Remove Extra Spaces</button>
                
            </div>
        </>
    )
}
