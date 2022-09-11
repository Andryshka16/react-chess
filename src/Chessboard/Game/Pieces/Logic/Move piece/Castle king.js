import {stateTable} from "../../piece";
import {turn, turns} from "./Move piece";

export default async function doCastling([x, y]){

    let k = x > 4 ? 1 : -1

    stateTable[y][4]({
            name: turns[turn] + "K",
            x: 4 + 2 * k,
            y,
            from: {x, y}
        })

    stateTable[y][x]({
            name: turns[turn] + "R",
            x: 4 + k,
            y,
            from: {x: 4, y}
        })
}