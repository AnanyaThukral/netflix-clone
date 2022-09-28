import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null 
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // login and logout are actions, we need to dispatch these actions
        login: (state, action) => {
            /* set the user state to whatever we passed as payload*/
            state.user =  action.payload
        },
        logout: (state) => {
            state.user = null
        },
        editEmail : (state, action) =>{
            state.user.email = action.payload.email
        }
    }
})

//dispath actions to the store
export const {login, logout, editEmail} = userSlice.actions;

//selectors (get info from the store)
export const selectUser = (state) => state.user.user;

//export reducer
export default userSlice.reducer
