import kingCoordinates from './King coordinates'
import { useCheckForDraw, useCheckMate, useCheckForChecks } from './'
import { useDispatch, useSelector } from 'react-redux'
import { setCheck } from '../../../../../../features/chess/chessSlice'

export default function useCheckSituation() {
	const { turn } = useSelector((store) => store.chess)
	const dispatch = useDispatch()

	const checkForChecks = useCheckForChecks()
	const checkForDraw = useCheckForDraw()
	const checkMate = useCheckMate()
	const king = kingCoordinates(turn + 'K')

	return () => {
		const checksArray = checkForChecks(king)
		const [check] = checksArray
		const amount = checksArray.length
		if (amount) {
			// console.log('CHECK!', [amount, check])
			dispatch(setCheck(king))

			if (checkMate(king, check, amount)) {
				console.log('MATE, GAME OVER!')
			}
		} else if (checkForDraw()) {
			console.log('DRAW, GAME OVER!')
		} else {
			dispatch(setCheck(null))
		}
	}
}
