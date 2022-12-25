import checkForChecks from "../King activity/Checks";
import { useSelector } from "react-redux"

export default function useCanCastle(x, y) {

    const { gameField, turn, castlingMoved } = useSelector(store => store.chess)
    
    if (gameField[y][x][1] !== "K")
        return []
    
    let castlingMoves = []
    for (let rook of [x-4, x+3]) {

        if (x !== 4
            || gameField[y][rook] !== turn + "R"
            || castlingMoved.includes(gameField[y][x])
            || castlingMoved.includes(rook + turn + "R")
            || checkForChecks([x, y])
        ) continue

        let k = rook > 4? 1: -1

        if (
            (checkForChecks([4 + k, y]) || gameField[y][4 + k] !== "0") ||
            (checkForChecks([4 + 2 * k, y]) || gameField[y][4 + 2 * k] !== "0")
        ) continue

        castlingMoves.push([rook, y])
    }

    console.log(castlingMoves)
    return castlingMoves
}