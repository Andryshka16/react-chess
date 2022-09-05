import Dots from "./Game/Dots"
import Cells from "./Game/Cells";
import Pieces from "./Game/Pieces";
import Notation from "./Game/Notation";
import Promotion from "./Game/Pieces/Logic/Pawn promotion/Promotion";
import PromotionContext from "./Game/Pieces/Logic/Pawn promotion/Promotion context";

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
