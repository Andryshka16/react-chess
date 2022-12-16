import { createSlice } from '@reduxjs/toolkit'
import gameField from './Gamefield'

const initialState = {
    gameField,
    turn: "w",
    colors: [
        "rgb(255,195,151)",
        "rgb(39,39,39)"
    ],
    selected: null,
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
        },
        setCheck: (state, {payload}) => {
            state.check = payload
        },
        setTurn: (state, {payload}) => {
            state.turn = payload
        },
        setSelected: (state, {payload}) => {
            state.selected = payload
        },
        movePiece: (state, { payload }) => {
            if (!state.selected) {
                return state
            }
            const [x2, y2] = payload
            const { x, y, name} = state.selected
            state.gameField[y2][x2] = name
            state.gameField[y][x] = "0"
            state.selected = null
            state.nextMoves = []
        }
        
    }
})

export default chessSlice.reducer

export const {clearNextMoves, setNextMoves, setCheck, setTurn, setSelected, movePiece} = chessSlice.actions
