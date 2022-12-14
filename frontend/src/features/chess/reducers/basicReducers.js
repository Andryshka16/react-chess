import initialState from '../initialState'
import movePiece from './movePiece'
import setPromoted from './setPromoted'

const reducers = {
    setNextMoves: (state, { payload }) => {
        state.nextMoves = payload
    },
    setCheck: (state, { payload }) => {
        state.check = payload
    },
    setSelected: (state, { payload }) => {
        state.selected = payload
    },
    setCoverMoves: (state, { payload }) => {
        state.coverMoves = payload
    },
    setChess: (_, { payload }) => {
        return payload
    },
    setDraw: (state) => {
        state.draw = true
    },
    setMate: (state) => {
        state.mate = true
    },
    restart: () => initialState,
    setPromoted,
    movePiece
}

export default reducers
