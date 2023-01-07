import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: '',
    initialized: true,
    color: undefined,
    participants: 0,
    readyPlayers: 0
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
        readyToPlay: (state) => {
            state.readyPlayers += 1
        },
        unReadyToPlay: (state) => {
            state.readyPlayers -= 1
        },
        setReadyPlayers: (state, { payload }) => {
            state.readyPlayers = payload
        },
        deleteRoom: () => {
            return initialState
        }
    }
})

export default thisRoomSLice.reducer

export const {
    initializeRoom,
    connectTo,
    handleConnection,
    deleteRoom,
    readyToPlay,
    unReadyToPlay,
    setReadyPlayers
} = thisRoomSLice.actions
