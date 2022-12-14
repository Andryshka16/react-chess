import { useDispatch, useSelector } from 'react-redux'


export default function useGetKnightMoves(x, y) {
    
    const {gameField} = useSelector(store => store.chess)

    if (gameField[y][x][1] !== "N")
        return []

    const moves = [
                [x + 2, y - 1], [x + 2, y + 1],
                [x - 2, y + 1], [x - 2, y - 1],
                [x + 1, y + 2], [x - 1, y + 2],
                [x + 1, y - 2], [x - 1, y - 2]
    ]
    return moves
}

