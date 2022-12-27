export default function pinFilter(move, piece, king) {
	let [x, y] = move
	let [x1, y1] = piece
	let [x2, y2] = king

	if (x1 === x2) {
		return x === x2
	} else if (y1 === y2) {
		return y === y2
	} else {
		return x2 + y2 === x + y
	}
}
