import useCheckForChecks from '../King activity/Checks'
import { useSelector } from 'react-redux'

export default function useCanCastle() {
	const { gameField, turn, castlingMoved } = useSelector((store) => store.chess)
	const checkForChecks = useCheckForChecks()

	return (x, y) => {
		let castlingMoves = []
		for (let rook of [x - 4, x + 3]) {
			if (
				x !== 4 ||
				gameField[y][rook] !== turn + 'R' ||
				castlingMoved.includes(gameField[y][x]) ||
				castlingMoved.includes(rook + turn + 'R') ||
				checkForChecks([x, y]).length
			)
				continue

			let k = rook > 4 ? 1 : -1

			if (
				checkForChecks([4 + k, y]).length ||
				gameField[y][4 + k] !== '0' ||
				checkForChecks([4 + 2 * k, y]).length ||
				gameField[y][4 + 2 * k] !== '0'
			)
				continue

			castlingMoves.push([rook, y])
		}

		return castlingMoves
	}
}
