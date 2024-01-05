import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {

    todos: [{id: 1, content: "Hello World !"}],
}

export const todoSlice = createSlice({

    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {

            const todo = {
                id: nanoid(),
                content: action.payload
            }

            state.todos.push(todo);

        },
        removeTodo: (state, action) => {
            
            state.todos = state.todos.filter( (todo) => (todo.id !== action.payload));
        },
        updateTodo: (state, action) => {

            // state.todos = state.todos.map( (todo) => ((todo.id === action.payload) ? (todo.content = action.payload) : todo ))

            const { id, content } = action.payload;

            // Find the index of the todo with the specified id
            const index = state.todos.findIndex(todo => todo.id === id);

            // If the todo with the specified id is found, update its content
            if (index !== -1) {
                state.todos[index].content = content;

            }
        }
    }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;



