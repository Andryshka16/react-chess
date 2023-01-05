import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    myRoom: '',
    participants: 0
}

const roomSLice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        createRoom: (state, { payload }) => {
            state.myRoom = payload
            state.participants += 1
        },
        deleteRoom: () => {
            return initialState
        }
    }
})

export default roomSLice.reducer
export const { createRoom, deleteRoom } = roomSLice.actions
