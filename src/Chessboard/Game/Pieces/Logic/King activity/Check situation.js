import kingCoordinates from './Find king'
import useCheckForDraw from './Draw'
import useCheckForChecks from './Checks'
import { useDispatch, useSelector } from 'react-redux'
import { setCheck } from '../../../../../features/chess/chessSlice'

export default function useCheckSituation() {
	const { turn } = useSelector((store) => store.chess)
	const dispatch = useDispatch()

	const checkForChecks = useCheckForChecks()
	const checkForDraw = useCheckForDraw()
	const king = kingCoordinates(turn + 'K')

	return () => {
		if (checkForChecks(king)) {
			console.log('CHECK!')
			dispatch(setCheck(king))

			// if (checkMate(king, checkCRD)) {
			// 	console.log('MATE, GAME OVER!')
			// }
		} else {
			dispatch(setCheck(null))
		}
		// if (checkForDraw(turn) && !checkForChecks(king)) {
		// 	console.log('DRAW, GAME OVER!')
		// }
	}
}
