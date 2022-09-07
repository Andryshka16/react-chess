import nextMovesInclude from "../Pieces/Nextmoves include";
import {gameField} from "../Pieces/Gamefield";
import movePiece from "../Pieces/Logic/Move piece/Move piece";
import {clearField} from "../Indicators/ShowNextMoves";

export default function handleCellClick(x,y){

    if (nextMovesInclude([x,y])
        && gameField[y][x] === "0")
    {
        movePiece(x, y)
    }
    else clearField()

}