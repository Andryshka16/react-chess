import {nextMoves} from "../NextMoves";

export default function getKnightMoves(x, y){
    nextMoves.push(...[
                [x + 2, y - 1], [x + 2, y + 1],
                [x - 2, y + 1], [x - 2, y - 1],
                [x + 1, y + 2], [x - 1, y + 2],
                [x + 1, y - 2], [x - 1, y - 2]
            ])
}