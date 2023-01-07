import useIsPiecePinned from './Pinned piece'
import useCastling from './Castling'
import { useSelector } from 'react-redux'
import useKingCoordinates from '../King activity/King coordinates'
import useCheckForChecks from '../King activity/Checks'

function pinFilter(move, piece, king) {
    let [x, y] = move
    let [x1, y1] = piece
    let [x2, y2] = king

    if (x1 === x2) {
        return x === x2
    } else if (y1 === y2) {
        return y === y2
    } else {
        return x2 + y2 === x + y
    }
}

export default function useFilterNextMoves() {
    const { gameField, coverMoves: _coverMoves, turn } = useSelector((store) => store.chess)

    const isPiecePinned = useIsPiecePinned()
    const checkForChecks = useCheckForChecks()
    const castling = useCastling()
    const king = useKingCoordinates(turn + 'K')

    return (x, y, nextMoves, coverMoves_) => {
        const coverMoves = coverMoves_ || _coverMoves

        let [color, piece] = gameField[y][x]
        let newMoves = nextMoves.filter(
            ([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8 && gameField[y][x][0] !== color
        )

        if (piece === 'K') {
            newMoves = newMoves.filter((move) => !checkForChecks(move).length)
            newMoves.push(...castling(x, y))
        }

        if (piece === 'P') {
            newMoves = newMoves.filter(([a, b]) => !(a === x && gameField[b][a] !== '0'))
        }

        if (coverMoves.length && piece !== 'K') {
            let saves = coverMoves.map((elm) => elm.toString())
            newMoves = newMoves.filter((move) => saves.includes(move.toString()))
        }

        if (isPiecePinned([x, y])) {
            newMoves = newMoves.filter((move) => pinFilter(move, [x, y], king))
        }

        return newMoves
    }
}
