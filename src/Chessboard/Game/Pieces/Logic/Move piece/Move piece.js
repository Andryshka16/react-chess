
import { useDispatch, useSelector } from 'react-redux'
import { movePiece } from '../../../../../features/chess/chessSlice'

export let turn = 'w'

export const turns = { w: 'b', b: 'w' }

export let enPassing
export let castlingMoved = []
export let clearCastlingMoved = () => (castlingMoved = [])

export default function useMovePiece() {
	const dispatch = useDispatch()

	return (x2, y2) => {

		// if (name === "P"  && (y2 === 7 || y2 === 0)){
		//     setPromoted([x2, y2])
		//     togglePointerEvents("none")
		// }

		// maybeCastlingPiecesMoved(color, name, x1)

		dispatch(movePiece([x2, y2]))
	}
}
