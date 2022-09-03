import Game from "./Chessboard/Game";
import PromotionContext from "./Chessboard/Game/Pieces/Logic/Pawn promotion/Promotion context";

export default function App(){

    return (
        <PromotionContext>
            <Game/>
        </PromotionContext>
    )
}