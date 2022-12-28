// import {getNextMove} from "../Next moves/NextMoves";
// import {checkForChecks} from "./Checks";
// import {turn} from "../Move piece/Move piece";
// import {coverMoves} from "../Move piece/Related with king/Check situation";
// import {gameField} from "../../Gamefield";

// export let kingEscape = []

// export function checkMate(king, check) {

//     let [x1, y1] = king
//     let [x2, y2] = check

//     kingEscape = [...getNextMove([x1, y1], true)]

//     if (checkForChecks([x1,y1]) > 1){

//         if (kingEscape.length) {
//             coverMoves.push("Double mate")
//             return false
//         }
//         else {
//             return true
//         }
//     }

//     let xK = x1===x2? 0: 1
//     let yK = y1===y2? 0: 1

//     if (gameField[y2][x2][1] !== "N"){

//         for (let i = 1; i * xK + Math.min(x1, x2) < Math.max(x1, x2) ||
//                         i * yK + Math.min(y1, y2) < Math.max(y1, y2); i++){

//             coverMoves.push([
//                 x1 + (x1 < x2 ? i: -i) * xK,
//                 y1 + (y1 < y2 ? i: -i) * yK
//                 ]
//             )
//         }
//     }
//     coverMoves.push([x2,y2])

//     for (let y = 0; y < 8; y++){
//         for (let x = 0; x < 8; x++){

//             let piece = gameField[y][x]
//             if (piece[0] === turn && getNextMove([x,y],true).length){
//                 return false
//             }
//         }
//     }

//     return true
// }