import {nextMoves} from "../NextMoves";
import {gameField} from "../../../Gamefield";

export default function getRookMoves(x, y){

    for (let i = 1; x + i < 8; i++){
        nextMoves.push([x + i, y])
        if(gameField[y][x + i] !== "0"){break}
    }
    for (let i = 1; x-i>=0; i++) {
        nextMoves.push([x - i, y])
        if (gameField[y][x - i] !== "0") {break}
    }
    for (let i = 1; y+i<8; i++){
        nextMoves.push([x, y + i])
        if(gameField[y + i][x] !== "0"){break}
    }
    for (let i = 1; y-i>=0; i++){
        nextMoves.push([x, y - i])
        if(gameField[y - i][x] !== "0"){break}
    }

}