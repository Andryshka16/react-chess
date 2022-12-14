import { useSelector } from 'react-redux';


export default function useGetKingMoves(x, y) {
    
    const {gameField} = useSelector(store=>store.chess)

    if (gameField[y][x][1] !== "K")
        return []

    const moves = [
                [x - 1, y - 1], [x - 1, y],
                [x - 1, y + 1], [x, y + 1],
                [x + 1, y - 1], [x, y - 1],
                [x + 1, y + 1], [x + 1, y],
    ]
    
    return moves
}
