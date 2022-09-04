import {enPassing} from "../../Move piece/Move piece";
import {nextMoves} from "../NextMoves";
import {gameField} from "../../../Gamefield";

export default function getPawnMoves(x, y){

    let pawn = gameField[y][x]
    let k = pawn === "wP"? -1 : 1

    if (y === 1 && pawn==="bP" && gameField[y + k][x] === "0"){
        nextMoves.push([x, y + k])
        nextMoves.push([x, y + 2 * k])
    }

    else if (y === 6 && pawn==="wP" && gameField[y + k][x] === "0"){
        nextMoves.push([x, y + k])
        nextMoves.push([x, y + 2 * k])
    }

    else {
        nextMoves.push([x, y + k])
    }

    if (x > 0 && gameField[y + k][x - 1] !== "0"){
        nextMoves.push([x - 1, y + k])
    }

    if (x < 7 && gameField[y + k][x + 1] !== "0"){
        nextMoves.push([x + 1, y + k])
    }

    if (x > 0 && enPassing && y === enPassing.y && x - 1 === enPassing.x){
        nextMoves.push([x - 1, y + k])
    }

    if (x < 7 && enPassing && y === enPassing.y && x + 1 === enPassing.x){
        nextMoves.push([x + 1, y + k])
    }
}