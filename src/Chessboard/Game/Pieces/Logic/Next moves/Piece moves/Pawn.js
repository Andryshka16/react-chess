import {enPassing} from "../../Move piece/Move piece";
import { useSelector } from 'react-redux';

export default function useGetPawnMoves(x, y){

    const { gameField } = useSelector(store => store.chess)

    if (gameField[y][x][1] !== "P")
        return []

    const moves = []

    let pawn = gameField[y][x]
    let k = pawn === "wP"? -1 : 1

    if (y === 1 && pawn==="bP" && gameField[y + k][x] === "0"){
        moves.push([x, y + k])
        moves.push([x, y + 2 * k])
    }

    else if (y === 6 && pawn==="wP" && gameField[y + k][x] === "0"){
        moves.push([x, y + k])
        moves.push([x, y + 2 * k])
    }

    else {
        moves.push([x, y + k])
    }

    if (x > 0 && gameField[y + k][x - 1] !== "0"){
        moves.push([x - 1, y + k])
    }

    if (x < 7 && gameField[y + k][x + 1] !== "0"){
        moves.push([x + 1, y + k])
    }

    // if (x > 0 && enPassing && y === enPassing.y && x - 1 === enPassing.x){
    //     moves.push([x - 1, y + k])
    // }

    // if (x < 7 && enPassing && y === enPassing.y && x + 1 === enPassing.x){
    //     moves.push([x + 1, y + k])
    // }

    return moves
}