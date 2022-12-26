import useNextMovesInclude from "../Pieces/Logic/Next moves/Nextmoves include";
import useMovePiece from "../Pieces/Logic/Move piece/Move piece";
import { useDispatch } from 'react-redux';
import { clearNextMoves } from '../../../features/chess/chessSlice';

export default function useHandleCellClick(x, y){

    const dispatch = useDispatch()
    const movePiece = useMovePiece()
    const nextMovesInclude = useNextMovesInclude()

    if (nextMovesInclude([x, y]))
        return () => movePiece(x,y)

    return () => dispatch(clearNextMoves())

}