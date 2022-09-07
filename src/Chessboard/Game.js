import Dots from "./Game/Indicators/Dots"
import Notation from "./Game/Notation";
import Promotion from "./Game/Pieces/Logic/Pawn promotion/Promotion";
import PromotionContext from "./Game/Pieces/Logic/Pawn promotion/Promotion context";
import Cells from "./Game/Cells/Cells";
import Pieces from "./Game/Pieces/Pieces";

export default function Game(){

    return (
        <PromotionContext>
            <Cells/>
            <Pieces/>
            <Dots/>
            <Notation/>
            <Promotion/>
        </PromotionContext>
    )

}
