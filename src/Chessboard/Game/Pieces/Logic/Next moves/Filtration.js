import {checkForChecks} from "../King activity/Checks";
import isPiecePinned from "./Check for pin";
import pinFilter from "./Piin filter";
import canCastle from "./Allow castling";
import {nextMoves} from "./NextMoves";
import {coverMoves} from "../Move piece/Check situation";
import {gameField} from "../../Gamefield";

export default function filterNextMoves(x, y){

    let [color, piece] = gameField[y][x]

    let newMoves = nextMoves.filter(([x,y])=>
        x >= 0 && x < 8
        && y >= 0 && y < 8
        && gameField[y][x][0] !== color
    )

    if (piece === "K"){
        newMoves = newMoves.filter(move => !checkForChecks(move))
        newMoves.push(...canCastle(x, y))
    }

    else if (piece === "P"){
        newMoves = newMoves.filter(([a, b]) => ! (a === x && gameField[b][a] !== "0"))
    }

    if (coverMoves.length && piece !== "K"){
        let saves = coverMoves.map(elm => elm.toString())
        newMoves = newMoves.filter(move => saves.includes(move.toString()))
    }

    if (isPiecePinned([x, y])){
        console.log(color + piece, "is Pinned")
        newMoves = newMoves.filter(move => pinFilter(move, [x,y]))
    }

    return newMoves

}