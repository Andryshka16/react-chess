import { useSelector } from 'react-redux'
import useGetNextMoves from '../Next moves/NextMoves'

export default function useCheckForDraw() {
	const { gameField, turn } = useSelector((store) => store.chess)
	const getNextMove = useGetNextMoves()

	return () => {
		for (let y = 0; y < 8; y++) {
			for (let x = 0; x < 8; x++) {
				let piece = gameField[y][x]
				if (piece[0] === turn && getNextMove(x, y).length) {
					return false
				}
			}
		}

		return true
	}
}
