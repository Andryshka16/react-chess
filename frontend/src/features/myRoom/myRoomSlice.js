import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    myRoom: '',
    participants: 0,
    reverse: false
}

const roomSLice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        createRoom: (state, { payload }) => {
            state.myRoom = payload
            state.participants += 1
        },
        joinRoom: (state, { payload }) => {
            if (state.myRoom) { 
                state.reverse = true
            }
            state.myRoom = payload
            state.participants = 2
        },
        deleteRoom: () => {
            return initialState
        }
    }
})

export default roomSLice.reducer
export const { createRoom, joinRoom, deleteRoom } = roomSLice.actions
