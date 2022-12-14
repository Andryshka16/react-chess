

export default function nextMovesInclude([x,y], nextMoves){
    return nextMoves.map(i => i.toString())
        .includes([x,y].toString())
}
