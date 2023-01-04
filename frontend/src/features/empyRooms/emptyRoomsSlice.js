import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const roomSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        newRoom: (state, { payload }) => {
            state.push(payload)
        },
        removeRoom: (state, { payload }) => {
            return state.filter((elm) => elm.id !== payload)
        }
    }
})

export default roomSlice.reducer

export const { newRoom, removeRoom } = roomSlice.actions
