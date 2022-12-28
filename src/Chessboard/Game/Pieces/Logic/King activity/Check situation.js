import kingCoordinates from './Find king'
import useCheckForDraw from './Draw'
import useCheckForChecks from './Checks'
import useCheckForMate from './Mate'
import { useDispatch, useSelector } from 'react-redux'
import { setCheck } from '../../../../../features/chess/chessSlice'

export default function useCheckSituation() {
	const { turn } = useSelector((store) => store.chess)
	const dispatch = useDispatch()

	const checkForChecks = useCheckForChecks()
	const checkForDraw = useCheckForDraw()
	const checkForMate = useCheckForMate()
	const king = kingCoordinates(turn + 'K')

	return () => {
		const checksArray = checkForChecks(king)
		const [check] = checksArray
		const amount = checksArray.length
		if (amount) {
			console.log('CHECK!', [amount, check])
			dispatch(setCheck(king))

			if (checkForMate(king, check, amount)) {
				console.log('MATE, GAME OVER!')
			}
		} else {
			dispatch(setCheck(null))
		}
		if (checkForDraw() && !amount) {
			console.log('DRAW, GAME OVER!')
		}
		
	}
}
