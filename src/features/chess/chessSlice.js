import { createSlice } from '@reduxjs/toolkit'
import gameField from './Gamefield'

import { current } from '@reduxjs/toolkit'

const turns = {
    "b": "w",
    "w": "b"
}

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
    coverMoves: [],
    followingPiece: {
        target: null,
        startingX: null,
        startingY: null,
    }

}

const gameField2 = [
    [ '0', '0', '0', '0', '0', '0', '0', 'bR' ],
    [ '0', '0', '0', '0', '0', 'bK', '0', '0' ],
    [ '0', 'wB', '0', '0', '0', '0', '0', '0' ],
    [ '0', '0', '0', '0', '0', '0', '0', '0' ],
    [ '0', '0', '0', '0', '0', '0', '0', '0' ],
    [ '0', '0', '0', '0', '0', '0', '0', '0' ],
    [ '0', '0', '0', '0', '0', '0', '0', '0' ],
    [ '0', "0", '0', 'wQ', 'wK', '0', '0', 'wR' ]
]

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
        setSelected: (state, { payload }) => {
            state.selected = payload
        },
        setFollowing: (state, { payload }) => {
            state.followingPiece = payload
        },
        movePiece: (state, { payload }) => {

            if (!current(state).selected){
                return state
            }
            
            console.log('moved on', payload)
            state.turn = turns[state.turn]
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

export const {
    clearNextMoves,
    setNextMoves,
    setCheck,
    setTurn,
    setSelected,
    setFollowing,
    movePiece
} = chessSlice.actions
