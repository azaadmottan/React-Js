import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';


function App() {

   const dispatch = useDispatch();

   const todos = useSelector( (state) => state.todos );

   return (
      <> 
         <div className='bg-zinc-500 text-white w-full h-screen flex flex-col items-center justify-center'>
            <h4 className='mb-4 text-4xl'>
               Add Todo 
            </h4>
            <div className=' bg-zinc-400 border-solid border-2 rounded-lg w-[75vh] h-[75vh] px-6 py-8 overflow-y-scroll scr'>

               <AddTodo /> 
               {
                  todos.map((todo) => (
                     
                     <Todos key={todo.id} todo={todo}/>
                  ))
               }

            </div>
         </div>
         
      </>
   );
}

export default App
