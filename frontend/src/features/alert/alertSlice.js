import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    show: false,
    text: ''
}

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        showAlert: (state, { payload }) => {
            state.show = true
            state.text = payload
        },
        hideAlert: (state, { payload }) => {
            state.show = false
            state.text = ''
        }
    }
})

export default alertSlice.reducer
export const { showAlert, hideAlert } = alertSlice.actions
