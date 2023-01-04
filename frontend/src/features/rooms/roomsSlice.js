import { createSlice } from '@reduxjs/toolkit'

import room from './createRoom'

const initialState = [room('123', '123', 'guest')]

const roomSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        createRoom: (state, { payload }) => {
            state.push(payload)
        }
    }
})

export default roomSlice.reducer

export const { createRoom } = roomSlice.actions
