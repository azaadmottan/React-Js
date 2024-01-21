import { configureStore } from "@reduxjs/toolkit";
import youTubeReducer from "../youTubeSlicer/youTubeSlicer.js";

const store = configureStore({

    reducer: {
        youTubeApp: youTubeReducer,
    }
});

export default store;