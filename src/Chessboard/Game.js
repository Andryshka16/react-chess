import Notation from "./Game/Notation";
import Promotion from "./Game/Pieces/Logic/Pawn promotion/Promotion";
import PromotionContext from "./Game/Pieces/Logic/Pawn promotion/Promotion context";
import Cells from "./Game/Cells/Cells";
import Pieces from "./Game/Pieces/Pieces";
import NextMoves from "./Game/Indicators/ShowNextMoves";
import CheckIndicator from "./Game/Indicators/ShowCheck";

export default function Game(){

    return (
        <PromotionContext>
            <Cells/>
            <Pieces/>
            <NextMoves/>
            <Notation/>
            <Promotion/>
            <CheckIndicator/>
        </PromotionContext>
    )

}
