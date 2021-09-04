import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuth: false,
    users: [
        {
            name: "user",
            email: "example@example.com",
            password: "password2021"
        }
    ],
    currentUser: {}
}

export const mainSelector = (state) => state.main

export const mainSlicer = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setIsAuth(state, actions) {
            state.isAuth = actions.payload
        },
        addUser(state, actions) {
            state.users = [...state.users, actions.payload]
        },
        setCurrentUser(state, actions) {
            state.currentUser = actions.payload
        }
    }
})

export const {
    setIsAuth,
    addUser,
    setCurrentUser
} = mainSlicer.actions

export default mainSlicer.reducer