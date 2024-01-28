import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    status: false,
    userData: null,
}

const authSlicer = createSlice({

    name: "auth",
    initialState,
    reducers: {

        login: (state, action) => {

            state.status = true;
            state.userData = action.payload;
            
            // Check if "auth" is already present in localStorage
            const existingAuth = JSON.parse(localStorage.getItem("auth"));

            if (!existingAuth) {

                localStorage.setItem("auth", JSON.stringify(state));
            }
            else {
                state.userData = existingAuth.userData;
            } 
        },
        logout: (state) => {

            state.status = false;
            state.userData = null;

            localStorage.removeItem("auth");
        }
    }

});

export const { login, logout } = authSlicer.actions;

export default authSlicer.reducer;