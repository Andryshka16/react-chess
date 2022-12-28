import { useDispatch, useSelector } from 'react-redux'
import { setCoverMoves } from '../../../../../features/chess/chessSlice'
import useGetNextMoves from '../Next moves/NextMoves'

export default function useCheckMate() {
	const { gameField, turn } = useSelector((store) => store.chess)
	const dispatch = useDispatch()
	const getNextMoves = useGetNextMoves()

	return (king, check, amount) => {
		const coverMoves = []
		const kingEscape = []

		let [x1, y1] = king
		let [x2, y2] = check

		kingEscape.push(...getNextMoves(x1, y1))

		if (amount > 1) {
			if (!kingEscape.length) {
				coverMoves.push('Double mate')
				return true
			} else {
				return false
			}
		}

		let xK = x1 === x2 ? 0 : 1
		let yK = y1 === y2 ? 0 : 1

		if (gameField[y2][x2][1] !== 'N') {
			for (
				let i = 1;
				i * xK + Math.min(x1, x2) < Math.max(x1, x2) ||
				i * yK + Math.min(y1, y2) < Math.max(y1, y2);
				i++
			) {
				coverMoves.push([
					x1 + (x1 < x2 ? i : -i) * xK,
					y1 + (y1 < y2 ? i : -i) * yK,
				])
			}
		}
		coverMoves.push([x2, y2])
		dispatch(setCoverMoves(coverMoves))

		for (let y = 0; y < 8; y++) {
			for (let x = 0; x < 8; x++) {
				let piece = gameField[y][x]
				if (piece[0] === turn && getNextMoves(x, y, coverMoves).length) {
					console.log(getNextMoves(x, y))
					return false
				}
			}
		}

		return true
	}
}
