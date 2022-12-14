import nextMovesInclude from "../Pieces/Logic/Next moves/Nextmoves include";
import movePiece from "../Pieces/Logic/Move piece/Move piece";
import {clearField} from "../Indicators/ShowNextMoves";

export default function handleCellClick(x,y){

    if (nextMovesInclude([x,y])) {
        movePiece(x, y)
    }
    // else clearField()

}