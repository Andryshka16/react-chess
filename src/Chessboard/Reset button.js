import {gameField, } from "./Game/Pieces/Gamefield";
import {setKilled} from "./Game/Eaten pieces/Eaten pieces";
import {clearCastlingMoved, updateTurn} from "./Game/Pieces/Logic/Move piece/Move piece";
import {setCheck} from "./Game/Indicators/ShowCheck";

export let allStates = []

function resetField(){

    updateTurn("w")
    clearCastlingMoved()
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

export default function Button(){
    return <button
        className={"reset"}
        onClick={resetField}
    >
        Restart
    </button>
}