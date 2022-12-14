import { createSlice } from '@reduxjs/toolkit'
import gameField from './Gamefield'

const initialState = {
    gameField,
    turn: "w",
    colors: [
        "rgb(255,195,151)",
        "rgb(39,39,39)"
    ],
    nextMoves: [],
    check: null,
    previousMove: [],
    castlingMoved: [],
    coverMoves: []

}

const chessSlice = createSlice({
    name: "chess",
    initialState,
    reducers: {
        clearNextMoves: (state) => {
            state.nextMoves = []
        },
        setNextMoves: (state, {payload}) => {
            state.nextMoves = payload
        }
    }
})

export default chessSlice.reducer

export const {clearNextMoves, setNextMoves} = chessSlice.actions
