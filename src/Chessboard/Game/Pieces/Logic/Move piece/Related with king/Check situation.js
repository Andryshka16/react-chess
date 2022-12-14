// import kingCoordinates from "../../King activity/Find king";
// import checkForDraw from "../../King activity/Draw";
// import {checkMate} from "../../King activity/Mates";
// import {checkCRD, checkForChecks} from "../../King activity/Checks";
// import {turn} from "../Move piece";

// export let coverMoves = []
// export const clearCoverMoves = () => coverMoves = []

// export default function checkSituation(){

//     clearCoverMoves()

//     if (checkForChecks(kingCoordinates(turn+"K"))){

//         console.log("CHECK!", checkCRD)
//         // setCheck(kingCoordinates(turn+"K"))

//         if (checkMate(kingCoordinates(turn+"K"), checkCRD)){
//             console.log("MATE, GAME OVER!")
//         }
//     }

//     if (checkForDraw(turn) && !checkForChecks(kingCoordinates(turn+"K"))){
//         console.log("DRAW, GAME OVER!")
//     }

// }
