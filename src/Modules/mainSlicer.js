import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuth: false
}

export const mainSelector = (state) => state.main

export const mainSlicer = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setIsAuth(state, actions) {
            state.isAuth = actions.payload
        }
    }
})

export const {
    setIsAuth
} = mainSlicer.actions

export default mainSlicer.reducer