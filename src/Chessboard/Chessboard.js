
import Notation from "./Notation"
import GameField from "./GameField";

export default function Chessboard(){

    return <div id={"chess"}>

        <Notation/>
        <GameField/>

    </div>
}