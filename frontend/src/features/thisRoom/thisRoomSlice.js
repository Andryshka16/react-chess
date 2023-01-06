import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: '',
    initialized: true,
    participants: 0,
    color: undefined,
    online: false
}

const thisRoomSLice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        initializeRoom: (state, { payload }) => {
            state.id = payload
            state.participants = 1
        },
        connectTo: (state, { payload }) => {
            state.id = payload
            state.online = true
            state.color = 'b'
            state.initialized = false
            state.participants = 2
        },
        handleConnection: (state, { payload }) => {
            state.id = payload
            state.online = true
            state.color = 'w'
            state.initialized = true
            state.participants = 2
        },
        deleteRoom: () => {
            return initialState
        }
    }
})

export default thisRoomSLice.reducer
export const { initializeRoom, connectTo, handleConnection, deleteRoom } = thisRoomSLice.actions