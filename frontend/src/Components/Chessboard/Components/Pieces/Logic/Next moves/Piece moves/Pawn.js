import { useSelector } from 'react-redux'

export default function useGetPawnMoves() {
    const { gameField, enPassing } = useSelector((store) => store.chess)

    return (x, y) => {
        if (y === 0 || y === 7) return []

        const moves = []
        let pawn = gameField[y][x]
        let k = pawn === 'wP' ? -1 : 1

        if (y === 1 && pawn === 'bP' && gameField[y + k][x] === '0') {
            moves.push([x, y + k])
            moves.push([x, y + 2 * k])
        } else if (y === 6 && pawn === 'wP' && gameField[y + k][x] === '0') {
            moves.push([x, y + k])
            moves.push([x, y + 2 * k])
        } else {
            moves.push([x, y + k])
        }

        if (x > 0 && gameField[y + k][x - 1] !== '0') {
            moves.push([x - 1, y + k])
        }

        if (x < 7 && gameField[y + k][x + 1] !== '0') {
            moves.push([x + 1, y + k])
        }

        const { x2, y2 } = enPassing || {}

        if (x > 0 && y === y2 && x - 1 === x2) {
            moves.push([x - 1, y + k])
        }

        if (x < 7 && y === y2 && x + 1 === x2) {
            moves.push([x + 1, y + k])
        }

        return moves
    }
}
