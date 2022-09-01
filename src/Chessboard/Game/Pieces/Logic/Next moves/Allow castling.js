import {checkForChecks} from "../King activity/Checks";
import {castlingMoved, turn} from "../Move piece/Move piece";
import {gameField} from "../../Gamefield";

export default function canCastle(x, y) {

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
            (checkForChecks([4 + 2*k, y]) || gameField[y][4 + 2*k] !== "0")
        ) continue

        castlingMoves.push([rook, y])
    }

    return castlingMoves
}