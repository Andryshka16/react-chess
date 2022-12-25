import nextMovesInclude from "../Pieces/Logic/Next moves/Nextmoves include";
import useMovePiece from "../Pieces/Logic/Move piece/Move piece";
import { useDispatch } from 'react-redux';
import { clearNextMoves } from '../../../features/chess/chessSlice';

export default function useHandleCellClick(x, y){

    const dispatch = useDispatch()
    const movePiece = useMovePiece(x, y)
    const nextMovesIncludeCell = nextMovesInclude([x, y])

    if (nextMovesIncludeCell) return movePiece

    return () => dispatch(clearNextMoves())
    // return () => movePiece()

}