import { useNextMovesInclude } from '../Pieces/Logic/Next moves/NextMoves'
import {
    movePiece,
    setNextMoves,
    setSelected
} from '../../../../features/chess/chessSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function useHandleCellClick(x, y) {
    const { id, initialized } = useSelector((store) => store.thisRoom)

    const dispatch = useDispatch()
    const nextMovesInclude = useNextMovesInclude()
    x = initialized ? x : 7 - x
    y = initialized ? y : 7 - y

    if (nextMovesInclude([x, y])) {
        return () => dispatch(movePiece([x, y, id]))
    }

    return () => {
        dispatch(setNextMoves([]))
        dispatch(setSelected(null))
    }
}
