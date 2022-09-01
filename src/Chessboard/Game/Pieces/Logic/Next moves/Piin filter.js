import kingCoordinates from "../King activity/Find king";
import {turn} from "../Move piece/Move piece";

export default function pinFilter([x,y], piece){

    let [x1, y1] = piece
    let [x2, y2] = kingCoordinates(turn+"K")

    if (x1 === x2){
        return x === x2
    }
    else if (y1 === y2){
        return y === y2
    }
    else {
        return x2 + y2 === x + y
    }
}