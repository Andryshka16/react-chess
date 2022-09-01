import Dots from "./Game/Dots"
import Cells from "./Game/Cells";
import Pieces from "./Game/Pieces/Pieces";
import Notation from "./Game/Notation";


export default function Game(){

    return <div id={"chess"}>
        <Cells/>
        <Pieces/>
        <Dots/>
        <Notation/>
    </div>
}
