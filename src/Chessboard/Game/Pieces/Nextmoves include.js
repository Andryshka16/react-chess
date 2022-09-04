import {nextMoves} from "./Logic/Next moves/NextMoves";

export default function nextMovesInclude([x,y]){
    return nextMoves.map(i => i.toString())
        .includes([x,y].toString())
}
