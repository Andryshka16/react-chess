import useIsPiecePinned from "./Check for pin";
import pinFilter from "./Pin filter";
import canCastle from "./Allow castling";
import { useSelector } from 'react-redux';
import useKingCoordinates from '../King activity/Find king';
import useCheckForChecks from '../King activity/Checks';

export default function useFilterNextMoves(x, y, nextMoves){

    const { gameField, coverMoves, turn } = useSelector(store => store.chess)
    let [color, piece] = gameField[y][x]

    const isPiecePinned = useIsPiecePinned([x, y])
    const checkForChecks = useCheckForChecks()
    const king = useKingCoordinates(turn + "K")
    const castlingMoves = canCastle(x, y)

    let newMoves = nextMoves.filter(([x,y])=>
        x >= 0 && x < 8
        && y >= 0 && y < 8
        && gameField[y][x][0] !== color
    )

    if (piece === "K"){
        newMoves = newMoves.filter(move => !checkForChecks(move))
        newMoves.push(...castlingMoves)
    }

    if (piece === "P"){
        newMoves = newMoves.filter(([a, b]) => ! (a === x && gameField[b][a] !== "0"))
    }

    if (coverMoves.length && piece !== "K"){
        let saves = coverMoves.map(elm => elm.toString())
        newMoves = newMoves.filter(move => saves.includes(move.toString()))
    }

    if (isPiecePinned){
        console.log(color + piece, "is Pinned")
        newMoves = newMoves.filter(move => pinFilter(move, [x,y], king))
    }

    return newMoves

}