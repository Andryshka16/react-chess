import kingCoordinates from "../King activity/Find king";
import checkForDraw from "../King activity/Draw";
import {checkMate} from "../King activity/Mates";
import {checkCRD, checkForChecks} from "../King activity/Checks";
import {turn} from "./Move piece";
import {clearNextMoves} from "../Next moves/NextMoves";

export let coverMoves = []

export default function checkSituation(){

    coverMoves = []

    if (checkForChecks(kingCoordinates(turn+"K"))){
        console.log("CHECK!", checkCRD)
        if (checkMate(kingCoordinates(turn+"K"), checkCRD)){
            console.log("MATE, GAME OVER!")
        }
    }

    if (checkForDraw(turn) && !checkForChecks(kingCoordinates(turn+"K"))){
        console.log("DRAW, GAME OVER!")
    }

    clearNextMoves()

}