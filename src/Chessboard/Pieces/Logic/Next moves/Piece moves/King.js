import { useSelector } from 'react-redux'

export default function useGetKingMoves() {

	return (x, y) => {
		const moves = [
			[x - 1, y - 1],
			[x - 1, y],
			[x - 1, y + 1],
			[x, y + 1],
			[x + 1, y - 1],
			[x, y - 1],
			[x + 1, y + 1],
			[x + 1, y],
		]

		return moves
	}
}
