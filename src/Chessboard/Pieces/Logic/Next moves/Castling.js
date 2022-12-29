import useCheckForChecks from '../King activity/Checks'
import { useSelector } from 'react-redux'

export default function useCastling() {
	const { gameField, turn, castlingMoved } = useSelector(
		(store) => store.chess
	)
	const checkForChecks = useCheckForChecks()

	return (x, y) => {
		let castlingMoves = []
		for (let rook of [x - 4, x + 3]) {
			if (
				x !== 4 ||
				gameField[y][rook] !== turn + 'R' ||
				castlingMoved.includes(4 + gameField[y][4]) ||
				castlingMoved.includes(rook + turn + 'R') ||
				checkForChecks([4, y]).length
			)
				continue

			let k = rook > 4 ? 1 : -1

			if (
				checkForChecks([4 + k, y]).length ||
				checkForChecks([4 + 2 * k, y]).length ||
				gameField[y][4 + k] !== '0' ||
				gameField[y][4 + 2 * k] !== '0' ||
				(k < 0 && gameField[y][1] !== '0')
			)
				continue

			castlingMoves.push([rook, y])
		}

		return castlingMoves
	}
}
