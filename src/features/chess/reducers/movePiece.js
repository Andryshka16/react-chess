export default function movePiece(state, { payload }) {
	const [x2, y2] = payload
	const { x, y, name } = state.selected
	const [color, piece] = name

	if (piece === 'K' && Math.abs(x2 - x) > 1) {
		const k = x2 > x ? 1 : -1
		state.gameField[y][4 + k] = color + 'R'
		state.gameField[y][4 + 2 * k] = color + 'K'
		state.gameField[y][4] = '0'
		state.gameField[y][k > 0 ? 7 : 0] = '0'
	} else if (piece === 'P' && x !== x2 && state.gameField[y2][x2] === '0') {
		state.gameField[y][x2] = '0'
		state.gameField[y2][x2] = name
		state.gameField[y][x] = '0'
	} else {
		state.gameField[y2][x2] = name
		state.gameField[y][x] = '0'
	}

	if (
		piece === 'R' &&
		(x === 0 || x === 7) &&
		!state.castlingMoved.includes(x + name)
	) {
		state.castlingMoved.push(x + name)
	} else if (
		piece === 'K' &&
		x === 4 &&
		!state.castlingMoved.includes(name)
	) {
		state.castlingMoved.push(name)
	}

	state.enPassing =
		name[1] === 'P' && Math.abs(y2 - y) === 2 ? { x2, y2 } : null

	state.turn = turns[state.turn]
	state.selected = null
	state.coverMoves = []
	state.nextMoves = []
}
