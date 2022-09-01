import {nextMoves} from "../NextMoves";
import {gameField} from "../../../Gamefield";

export default function getBishopMoves(x,y){

    for (let i = 1; x + i < 8 && y + i < 8; i++){
        nextMoves.push([x + i, y + i])
        if(gameField[y + i][x + i] !== "0"){break}
    }
    for (let i = 1; x - i >= 0 && y - i >= 0; i++){
        nextMoves.push([x - i, y - i])
        if(gameField[y - i][x - i] !== "0"){break}
    }
    for (let i = 1; y + i < 8 && x - i >= 0; i++){
        nextMoves.push([x - i, y + i])
        if(gameField[y + i][x - i] !== "0"){break}
    }
    for (let i = 1; y - i >= 0 && x + i < 8; i++){
        nextMoves.push([x + i, y - i])
        if(gameField[y - i][x + i] !== "0"){break}
    }
}