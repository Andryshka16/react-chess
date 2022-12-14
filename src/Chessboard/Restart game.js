import {clearCastlingMoved, updateTurn} from "./Game/Pieces/Logic/Move piece/Move piece";
import {clearField} from "./Game/Indicators/ShowNextMoves";
import {setKilled} from "./Game/Eaten pieces/Eaten pieces";
import {gameField} from "./Game/Pieces/Gamefield";
import {clearCoverMoves, coverMoves} from "./Game/Pieces/Logic/Move piece/Related with king/Check situation";

export let allStates = []

export default function restart(){

    updateTurn("w")
    clearCastlingMoved()
    clearCoverMoves()
    // clearField()

    // setCheck(false)
    setKilled([])

    allStates.forEach(setPiece=> {

        setPiece(piece => {
            const {x, y} = piece
            gameField[piece.y][piece.x] = "0"

            return {
                ...piece,
                from: {x,y},
                ...piece.initial,
            }
        })
    })
}