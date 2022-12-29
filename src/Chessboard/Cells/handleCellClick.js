import { useNextMovesInclude } from '../Pieces/Logic/Next moves/NextMoves'
import { movePiece, setNextMoves } from '../../features/chess/chessSlice'
import { useDispatch } from 'react-redux'

export default function useHandleCellClick(x, y) {
	const dispatch = useDispatch()
	const nextMovesInclude = useNextMovesInclude()

	if (nextMovesInclude([x, y])) return () => dispatch(movePiece([x, y]))

	return () => dispatch(setNextMoves([]))
}
