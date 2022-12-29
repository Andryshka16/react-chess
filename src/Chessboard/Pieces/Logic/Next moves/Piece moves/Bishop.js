import { useSelector } from 'react-redux'

export default function useGetBishopMoves() {
	const { gameField } = useSelector((store) => store.chess)

	return (x, y) => {
		const moves = []

		for (let i = 1; x + i < 8 && y + i < 8; i++) {
			moves.push([x + i, y + i])
			if (gameField[y + i][x + i] !== '0') break
		}
		for (let i = 1; x - i >= 0 && y - i >= 0; i++) {
			moves.push([x - i, y - i])
			if (gameField[y - i][x - i] !== '0') break
		}
		for (let i = 1; y + i < 8 && x - i >= 0; i++) {
			moves.push([x - i, y + i])
			if (gameField[y + i][x - i] !== '0') break
		}
		for (let i = 1; y - i >= 0 && x + i < 8; i++) {
			moves.push([x + i, y - i])
			if (gameField[y - i][x + i] !== '0') break
		}

		return moves
	}
}
