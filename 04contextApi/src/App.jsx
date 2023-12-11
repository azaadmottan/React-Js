import { useState } from "react";
import "./App.css";
import { TodoProvider } from "./context/TodoContext";
import { useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {

   const [todos, setTodos] = useState([]);

   const addTodo = (todo) => {

      setTodos((prev) => [{id: Date.now(), ...todo}, ...prev]);
   }

   const updateTodo = (id, todo) => {

      setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
   }

   const deleteTodo = (id) => {

      setTodos((prev) => prev.filter((todo) => todo.id !== id));
   }

   const toggleComplete = (id) => {

      setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo));
   }

   useEffect(() => {

      const todos = JSON.parse(localStorage.getItem("todos"))

      if (todos && todos.length > 0) {
          
         setTodos(todos);
      }
   },[]);

   useEffect(() => {

      localStorage.setItem("todos", JSON.stringify(todos))
   }, [todos]);


   return (
   <>
      <h2 className="bg-slate-600 text-white tracking-wider w-8/12 mx-auto my-8 p-4 text-center text-2xl font-bold rounded-lg">
      Todo App
      </h2>

      <div className="bg-blue-700 w-8/12 max-h-[80vh] overflow-hidden overflow-y-scroll m-auto my-14 pb-1 rounded-lg">

         <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>

            <TodoForm />
            {todos.map((todo) => (
                  <TodoItem key={todo.id} todo={todo} />
            ))}
            
         </TodoProvider>
      </div>
   </>
   );
}

export default App;
