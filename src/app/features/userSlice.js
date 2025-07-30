    import { createSlice } from "@reduxjs/toolkit";
    const initialState = {
        user: null,
    }

    const userSlice = createSlice({
        name:"user",
        initialState,
        reducers:{
            login: (state, {payload})=>{
                state.user = payload 
            },
            logOut: (state, {payload})=>{},
            authReady: (state, { payload }) => {
                state.isAuthReady = true;
            }
            },
        }
    )

    export const {login , logOut, authReady} = userSlice.actions
    export default userSlice.reducer