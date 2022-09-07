import {drawDots} from "../../../Indicators/ShowNextMoves";
import getBishopMoves from "./Piece moves/Bishop";
import getRookMoves from "./Piece moves/Rook";
import getKnightMoves from "./Piece moves/Knight";
import getKingMoves from "./Piece moves/King";
import getPawnMoves from "./Piece moves/Pawn";
import filterNextMoves from "./Filtration";
import {gameField} from "../../Gamefield";

export let nextMoves = []

export const clearNextMoves = () => nextMoves = []

export function getNextMove([x,y], check=false){

    let piece = gameField[y][x]
    nextMoves = []

    const steps = {
        "K": () => getKingMoves(x, y),
        "N": () => getKnightMoves(x, y),
        "Q": () => {
            getBishopMoves(x, y)
            getRookMoves(x, y)
        },
        "B": () => getBishopMoves(x, y),
        "R": () => getRookMoves(x, y),
        "P": () => getPawnMoves(x, y),
    }

    steps[piece[1]]()

    nextMoves = filterNextMoves(x, y)

    if (check){
        return nextMoves
    }

    drawDots()
}

