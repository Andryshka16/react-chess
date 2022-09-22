import {clearCastlingMoved, updateTurn} from "./Game/Pieces/Logic/Move piece/Move piece";
import {clearField} from "./Game/Indicators/ShowNextMoves";
import {setCheck} from "./Game/Indicators/ShowCheck";
import {setKilled} from "./Game/Eaten pieces/Eaten pieces";
import {gameField} from "./Game/Pieces/Gamefield";

export let allStates = []

export default function restart(){

    updateTurn("w")
    clearCastlingMoved()
    clearField()

    setCheck(false)
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