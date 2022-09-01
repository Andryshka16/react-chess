import {nextMoves} from "./Pieces/Logic/Next moves/NextMoves";
import {clearField} from "./Dots";
import {movePiece} from "./Pieces/Logic/Move piece/Move piece";

const color1 = "rgb(255,195,151)"
const color2 = "rgb(39,39,39)"

function handleCellClick(x,y){

    if (nextMoves.map(i => i.toString()).includes([x,y].toString())) {
        movePiece(x,y)
    }
    else {
        clearField()
    }
}

export default function Cells(){

    return Array.from({length: 64}, (_,i)=>
            <div
                className={"cell"}
                key={i}
                style={{background: Math.floor(i/8) % 2 ? (i % 2 ? color1: color2): (i % 2 ? color2: color1)}}
                onClick={()=>{handleCellClick(i % 8,(i - i % 8) / 8)}}>
            </div>
    )
}