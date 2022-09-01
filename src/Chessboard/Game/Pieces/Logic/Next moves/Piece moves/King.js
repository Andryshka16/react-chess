import {nextMoves} from "../NextMoves";

export default function getKingMoves(x, y){
    nextMoves.push(...[
                [x - 1, y - 1], [x - 1, y],
                [x - 1, y + 1], [x, y + 1],
                [x + 1, y - 1], [x, y - 1],
                [x + 1, y + 1], [x + 1, y],
            ])
}
