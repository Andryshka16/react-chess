import Notation from "./Game/Notation";
import Promotion from "./Game/Pieces/Logic/Pawn promotion/Promotion";
import PromotionContext from "./Game/Pieces/Logic/Pawn promotion/Promotion context";
import Cells from "./Game/Cells/Cells";
import Pieces from "./Game/Pieces/Pieces";
import NextMoves from "./Game/Indicators/ShowNextMoves";
import CheckIndicator from "./Game/Indicators/ShowCheck";
import EatenPieces from "./Game/Eaten pieces/Eaten pieces";

export default function Game(){

    return (
        <EatenPieces>
            <PromotionContext>
                <Cells/>
                <Pieces/>
                <NextMoves/>
                <Notation/>
                <Promotion/>
                <CheckIndicator/>
            </PromotionContext>
        </EatenPieces>
    )

}
