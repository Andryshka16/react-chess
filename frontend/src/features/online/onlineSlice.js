import { createSlice } from '@reduxjs/toolkit'

import _initialState from '../chess/initialState'

const initialState = { ..._initialState, online: true }

const onlineSlice = createSlice({
    name: 'online',
    initialState,
    reducers: {
        setOnlineChess: (_, { payload }) => {
            return payload
        }
    }
})

export default onlineSlice.reducer

export const { setOnlineChess } = onlineSlice.actions
