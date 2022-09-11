import {castlingMoved} from "../Move piece";

export default function maybeCastlingPiecesMoved(color, name, x){

    if (name === "R" && (x === 0 || x === 7)
        && !castlingMoved.includes(x + color + name)) {
       castlingMoved.push(x + color + name)
    }

    else if (name === "K" && x === 4
        && !castlingMoved.includes(color + name)){
        castlingMoved.push(color + name)
    }
}