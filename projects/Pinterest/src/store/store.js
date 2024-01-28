import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slicer/authSlicer";


const loadState = () => {

    try {

        const serializedState = localStorage.getItem("auth");

        if (serializedState === null) {

            return undefined;
        }

        return JSON.parse(serializedState);
    } catch (err) {

        return undefined;
    }
}

const store = configureStore({

    reducer: {
        auth: authReducer,
    },
    // preloadedState: loadState(),
    // preloadedState: { auth: { userData: JSON.parse(localStorage.getItem("auth")) } },
});

export default store;