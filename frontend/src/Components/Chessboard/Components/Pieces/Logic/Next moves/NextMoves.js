import { bishopMoves, rookMoves, knightMoves, kingMoves, pawnMoves } from './Piece moves/'

import useFilterMoves from './Filtration'
import { useSelector } from 'react-redux'

export function useNextMovesInclude() {
    const { nextMoves } = useSelector((store) => store.chess)

    return ([x, y]) => nextMoves.map((i) => i.toString()).includes([x, y].toString())
}

export default function useGetNextMoves() {
    const { gameField } = useSelector((store) => store.chess)
    const filter = useFilterMoves()

    const bishop = bishopMoves()
    const rook = rookMoves()

    const steps = {
        K: kingMoves(),
        N: knightMoves(),
        Q: (x, y) => [...rook(x, y), ...bishop(x, y)],
        B: bishopMoves(),
        P: pawnMoves(),
        R: rookMoves()
    }

    return (x, y, coverMoves) => {
        let piece = gameField[y][x][1]
        const getMoves = steps[piece]
        const filtered = filter(x, y, getMoves(x, y), coverMoves)
        return filtered
    }
}
