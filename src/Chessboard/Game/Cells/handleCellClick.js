import useMovePiece from "../Pieces/Logic/Move piece/Move piece";
import {useNextMovesInclude} from "../Pieces/Logic/Next moves/NextMoves";
import { clearNextMoves } from '../../../features/chess/chessSlice';
import { useDispatch } from 'react-redux';

export default function useHandleCellClick(x, y){

    const dispatch = useDispatch()
    const movePiece = useMovePiece()
    const nextMovesInclude = useNextMovesInclude()

    if (nextMovesInclude([x, y]))
        return () => movePiece(x,y)

    return () => dispatch(clearNextMoves())

}