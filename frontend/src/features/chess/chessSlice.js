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
    setNextMoves,
    setCheck,
    setSelected,
    setCoverMoves,
    movePiece,
    setPromoted,
    restart
} = chessSlice.actions
