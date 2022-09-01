import {clearField} from "../../../Dots";
import updateState from "./Update state";
import {recentPieceCrd} from "../../Piece";
import {gameField} from "../../Gamefield";

export let turn = "w"
export const turns = {"w":"b","b":"w"}

export let enPassing
export let castlingMoved = []

export function movePiece(x2, y2){

    clearField()

    let [x1, y1, [color, name], piece, setPiece] = recentPieceCrd

    turn = turns[turn]

    if (name === "P" && x1 !== x2 && gameField[y2][x2] === "0"){
        enPassing.remove()
    }

    else if (name === "R" && (x1 === 0 || x1 === 7)
        && !castlingMoved.includes(x1 + color + name)) {
       castlingMoved.push(x1 + color + name)
    }

    else if (name === "K" && x1 === 4
        && !castlingMoved.includes(color + name)){
        castlingMoved.push(color + name)
    }

    else if (name === "P" && Math.abs(y2 - y1) === 2) {
        enPassing = {
            x: x2,
            y: y2,
            remove: () => setPiece(false)
        }
    }

    if (name === "P"  && (y2===7 || y2===0)){

        updateState(setPiece,{
            name: prompt("Enter piece name"),
            x: x2,
            y: y2,
            from: {x: x1, y: y1}
        })
    }
    else {

        updateState(setPiece,{
            ...piece,
            x: x2,
            y: y2,
            from: {x: x1, y: y1}
        })
    }

}



