import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuth: false,
    users: [
        {
            name: "user",
            email: "example@example.com",
            password: "password2021"
        }
    ]
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
        }
    }
})

export const {
    setIsAuth,
    addUser
} = mainSlicer.actions

export default mainSlicer.reducer