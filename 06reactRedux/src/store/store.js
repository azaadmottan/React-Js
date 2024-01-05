import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../todoSlicer/todoSlicer.js";

export const store = configureStore({

    reducer: todoSlice,
});
