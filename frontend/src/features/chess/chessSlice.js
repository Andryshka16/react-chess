import { createSlice } from '@reduxjs/toolkit'

import reducers from './reducers'
import initialState from './initialState'

const chessSlice = createSlice({
    name: 'chess',
    initialState,
    reducers
})

export default chessSlice.reducer

export const {
    setChess,
    setNextMoves,
    setCheck,
    setSelected,
    setCoverMoves,
    movePiece,
    setPromoted,
    setMate,
    setDraw,
    restart
} = chessSlice.actions
