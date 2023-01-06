import { useNextMovesInclude } from '../Pieces/Logic/Next moves/NextMoves'
import {
    movePiece,
    setNextMoves,
    setSelected
} from '../../../../features/chess/chessSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function useHandleCellClick(x, y) {
    const { myRoom, reverse } = useSelector((store) => store.myRoom)

    const dispatch = useDispatch()
    const nextMovesInclude = useNextMovesInclude()

    if (nextMovesInclude([x, reverse ? 7 - y : y])) {
        return () => dispatch(movePiece([x, reverse ? 7 - y : y, myRoom]))
    }

    return () => {
        dispatch(setNextMoves([]))
        dispatch(setSelected(null))
    }
}
