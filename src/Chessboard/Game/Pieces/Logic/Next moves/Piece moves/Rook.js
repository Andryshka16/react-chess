import { useSelector } from 'react-redux';

export default function useGetRookMoves(x, y){

    const { gameField } = useSelector(store => store.chess)

    if (!(gameField[y][x][1] === "R" || gameField[y][x][1] === "Q"))
        return []

    const moves = []

    for (let i = 1; x + i < 8; i++){
        moves.push([x + i, y])
        if (gameField[y][x + i] !== "0") 
            break
    }
    for (let i = 1; x-i>=0; i++) {
        moves.push([x - i, y])
        if (gameField[y][x - i] !== "0")  
            break
    }
    for (let i = 1; y+i<8; i++){
        moves.push([x, y + i])
        if (gameField[y + i][x] !== "0")
            break
    }
    for (let i = 1; y-i>=0; i++){
        moves.push([x, y - i])
        if (gameField[y - i][x] !== "0") 
            break
    }

    return moves

}