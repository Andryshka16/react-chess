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
    enpassing: null,
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
            const [x2, y2] = payload
            const { x, y, name } = state.selected

            if (name[1] === "P" && x !== x2 && state.gameField[y2][x2] === "0") {
                state.gameField[y][x2] = "0"
            }

            if (name[1] === "K" && Math.abs(x2 - x) > 1) {
                const k = x2 > x ? 1 : -1
                state.gameField[y][4 + k] = name[0] + "R"
                state.gameField[y][4 + 2 * k] = name[0] + "K"
                state.gameField[y][4] = "0"
                state.gameField[y][k > 0 ? 7 : 0] = "0"
            }
            else {
                state.gameField[y2][x2] = name
                state.gameField[y][x] = "0"
            }

            state.enPassing = name[1] === "P" && Math.abs(y2 - y) === 2
                ? {x2, y2}
                : null
            
            state.turn = turns[state.turn]
            state.selected = null
            state.nextMoves = []
        },
        
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
    movePiece,
    castle,
} = chessSlice.actions
