export default function useGetKnightMoves() {
	return (x, y) => {
		const moves = [
			[x + 2, y - 1],
			[x + 2, y + 1],
			[x - 2, y + 1],
			[x - 2, y - 1],
			[x + 1, y + 2],
			[x - 1, y + 2],
			[x + 1, y - 2],
			[x - 1, y - 2],
		]
		return moves
	}
}
