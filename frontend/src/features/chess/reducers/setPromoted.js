import { socket } from '../../../Socket'

export default function setPromoted(state, { payload }) {
    const { x1, y1, x2, y2, name } = state.promoted

    if (!payload) {
        const { turn, turns } = state
        state.gameField[y1][x1] = name
        state.promoted = null
        state.lastMoves = []
        state.turn = turns[turn]
    } else {
        state.gameField[y2][x2] = payload.name
        state.promoted = null
        socket.emit('handleChessMove', [state, payload.id])
    }
}
