
import {Cells, Pieces, Dots} from "./PiecesAndCells"

export default function GameField(){

    return <div id={"gameContainer"}>
        <Cells/>
        <Pieces/>
        <Dots/>
    </div>
}
