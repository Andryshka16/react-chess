import { socket } from '../../../Socket'

import { current } from '@reduxjs/toolkit'

export default function movePiece(state, { payload }) {
    const [x2, y2, roomID] = payload
    const { x1, y1, name } = state.selected
    const [color, piece] = name
    const { turn, turns } = state

    if (piece === 'P' && x1 !== x2 && state.gameField[y2][x2] === '0') {
        state.gameField[y1][x2] = '0'
    }

    if (piece === 'K' && Math.abs(x2 - x1) > 1) {
        const k = x2 > x1 ? 1 : -1
        state.gameField[y1][4 + k] = color + 'R'
        state.gameField[y1][4 + 2 * k] = color + 'K'
        state.gameField[y1][4] = '0'
        state.gameField[y1][k > 0 ? 7 : 0] = '0'
    } else if (piece === 'P' && (y2 === 7 || y2 === 0)) {
        state.promoted = { x1, y1, x2, y2, name }
        state.gameField[y1][x1] = '0'
    } else {
        state.gameField[y2][x2] = name
        state.gameField[y1][x1] = '0'
    }

    if (
        ((piece === 'R' && (x1 === 0 || x1 === 7)) || (piece === 'K' && x1 === 4)) &&
        !state.castlingMoved.includes(x1 + name)
    ) {
        state.castlingMoved.push(x1 + name)
    }

    state.enPassing = name[1] === 'P' && Math.abs(y2 - y1) === 2 ? { x2, y2 } : null

    state.lastMoves = [
        [x1, y1],
        [x2, y2]
    ]
    state.turn = turns[turn]
    state.selected = null
    state.coverMoves = []
    state.nextMoves = []

    if (state.online) {
        socket.emit('handleChessMove', [state, roomID])
    }
}
