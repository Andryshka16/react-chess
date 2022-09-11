import {clearField} from "../../../Indicators/ShowNextMoves";
import togglePointerEvents from "../Pawn promotion/togglePointerEvents";
import doCastling from "./Related with king/Castle king";
import removePiece from "./Remove piece";
import maybeCastlingPiecesMoved from "./Related with king/Mby castling pieces moved";
import updateState from "./Update state";
import {recentPieceCrd} from "../../piece";
import {gameField} from "../../Gamefield";
import {setPromoted} from "../Pawn promotion/Promotion";
import {setCheck} from "../../../Indicators/ShowCheck";

export let turn = "w"
export const turns = {"w":"b","b":"w"}

export let enPassing
export let castlingMoved = []

export default function movePiece(x2, y2){

    clearField()

    let [x1, y1, [color, name], piece, setPiece] = recentPieceCrd

    turn = turns[turn]
    setCheck(false)

    if (name === "K" && Math.abs(x2 - x1) > 1){
        updateState(doCastling, [x2, y2])
        return
    }

    if (gameField[y2][x2] !== "0") {
        removePiece(x2, y2)
    }

    else if (name === "P" && x1 !== x2 && gameField[y2][x2] === "0"){
        removePiece(x2, y1)
    }

    enPassing = name === "P" &&
        Math.abs(y2 - y1) === 2 ?
            {x: x2, y: y2} : false

    if (name === "P"  && (y2 === 7 || y2 === 0)){
        setPromoted([x2, y2])
        togglePointerEvents("none")
    }

    maybeCastlingPiecesMoved(color, name, x1)

    updateState(setPiece,{
            ...piece,
            x: x2,
            y: y2,
            from: {x: x1, y: y1}
        })
}
