import initialState from './initialState'
import movePiece from './reducers/movePiece'
import setPromoted from './reducers/setPromoted'

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
    restart: () => initialState,
    setPromoted,
    movePiece
}

export default reducers
