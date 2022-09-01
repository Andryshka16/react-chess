import {getNextMove} from "../Next moves/NextMoves";
import {gameField} from "../../Gamefield";


export default function checkForDraw(turn) {

    for (let y = 0; y < 8; y++){
        for (let x = 0; x < 8; x++){

            let piece = gameField[y][x]
            if (piece[0] === turn && getNextMove([x,y],true).length){
                return false
            }
        }
    }

    return true
}