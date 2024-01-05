import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../todoSlicer/todoSlicer";

function Todos({todo}) {

    const dispatch = useDispatch();

    const [todoMsg, setTodoMsg] = useState(todo.content);
    let [isEditableTodo, setIsTodoEditable] = useState(false);


    const handleEditTodo = () => {
        
        setIsTodoEditable(true);
    }

    const saveUpdatedTodo = () => {

        dispatch(updateTodo(todoMsg));
        setIsTodoEditable(false);
    }
    
    return (
        <>

        <li key={todo.id} className="bg-zinc-800 text-white text-lg mt-3 px-3 py-4 flex justify-between items-center rounded-lg">
            
            <input type="text" 
                className="w-full mr-3 rounded px-2 outline-none border-none bg-zinc-800 text-white text-ellipsis"
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isEditableTodo}
            />

            <span className="flex justify-between">

                {
                    !isEditableTodo ? (
                        
                        <button 
                            className="bg-orange-500 text-white text-xl font-semibold px-3 py-1 rounded-lg hover:bg-orange-600 mr-3"
                            onClick={handleEditTodo}
                        >Edit</button>
                        ) : (
                            <button 
                                className="bg-green-500 text-white text-xl font-semibold px-3 py-1 rounded-lg hover:bg-green-600 mr-3"
                                onClick={saveUpdatedTodo}
                            >Save</button>
                        )
                    }

                <button className="bg-red-500 text-white text-xl font-semibold px-2 py-1 rounded-lg hover:bg-red-600" key={todo.id} onClick={() => dispatch(removeTodo(todo.id))}>✕</button>
            </span>
        </li>

        </>
    );
}

export default Todos;