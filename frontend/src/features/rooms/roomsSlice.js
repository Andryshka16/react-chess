import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    rooms: []
}

const roomSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        createRoom: (state, payload) => {
            state.rooms.push(payload)
        }
    }
})

export default roomSlice.reducer

export const { createRoom } = roomSlice.actions
