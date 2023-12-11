import React from "react";
import { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoForm = () => {
   const [todo, setTodo] = useState("");

   const {addTodo} = useTodo();

   const add = (e) => {

      e.preventDefault();

      if (!todo) return
      
      addTodo({todo: todo, completed: false});
      setTodo("");
   }

   return (
   <>
      <form onSubmit={add}>
         <div className="w-10/12 mx-auto my-4 bg-slate-400 py-4 px-2 text-xl flex rounded sticky top-0">
            <input
               type="text"
               placeholder="Enter Todo Here..."
               value={todo}
               onChange={(e) => setTodo(e.target.value)}
               className="w-[100%] rounded-l-lg py-2 px-3 outline-none"
            />
            <button
               type="submit"
               className="px-9 py-2 bg-blue-800 text-lg text-white font-bold text-center rounded-r-lg transition delay-75 ease-out cursor-pointer hover:bg-black"
            >Add</button>
         </div>
      </form>
    </>
  );
};

export default TodoForm;
