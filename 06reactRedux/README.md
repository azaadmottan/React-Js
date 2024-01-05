# Steps to use React Redux-toolkit

## Install the necessary packages using npm

```javascript

    npm install @reduxjs/toolkit react-redux

```

## Store setup

Create a store using configureStore from Redux Toolkit:

```javascript

    import { configureStore } from '@reduxjs/toolkit';
    import rootReducer from './reducers';

    const store = configureStore({

        reducer: rootReducer,
    });

```

## Combine multiple reducers

If you have multiple reducers, use combineReducers to merge them into a single root reducer:

```javascript

    import { combineReducers } from '@reduxjs/toolkit';
    import counterReducer from './features/counter/counterSlice';
    import todosReducer from './features/todos/todosSlice';

    const rootReducer = combineReducers({

        counter: counterReducer,
        todos: todosReducer,
    });

```

## Create State Slices

Use createSlice to define state slices, which encapsulate reducer logic and actions:

```javascript

    import { createSlice } from '@reduxjs/toolkit';

    const counterSlice = createSlice({

        name: 'counter',
        initialState: {
            value: 0,
        },
        reducers: {
            increment: (state) => {
            state.value += 1;
            },
            decrement: (state) => {
            state.value -= 1;
            },
        },
    });

    export const { increment, decrement } = counterSlice.actions;
    export default counterSlice.reducer;

```

## Connect Store to React

Use Provider from React-Redux to wrap your application and make the store available to components:

```javascript

    import React from 'react';
    import { Provider } from 'react-redux';
    import store from './store';

    function App() {
        return (
            <Provider store={store}>
            {/* Your application components */}
            </Provider>
        );
    }

```

## Use useSelector and useDispatch Hooks

Access "state" and dispatch "actions" in components using these hooks:

```javascript

    import React from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import { increment, decrement } from './features/counter/counterSlice';

    function Counter() {
        const count = useSelector((state) => state.counter.value);
        const dispatch = useDispatch();

        return (
            <div>
                <button onClick={() => dispatch(decrement())}>-</button>
                <span>{count}</span>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
        );
    }

```



