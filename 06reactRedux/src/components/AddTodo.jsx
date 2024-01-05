import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from "../todoSlicer/todoSlicer";


function AddTodo() {

    const [ input, setInput ] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        
        e.preventDefault();

        if(!(input === "")) {

            dispatch(addTodo(input));
        }

        setInput("");

    }

    return (
        <>
            <form onSubmit={addTodoHandler} method='post' className='flex'>
                <input 
                    type="text" 
                    placeholder='Enter todo here...' className='text-black text-xl px-4 py-2 w-full rounded-l-lg outline-none' 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                    

                <button type='submit' className='rounded-r-lg bg-blue-600 text-xl px-4 hover:bg-blue-700'>Add</button>
            </form>
        </>
    );
}

export default AddTodo;