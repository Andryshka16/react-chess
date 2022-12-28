import useGetBishopMoves from './Piece moves/Bishop'
import useGetRookMoves from './Piece moves/Rook'
import useGetKnightMoves from './Piece moves/Knight'
import useGetKingMoves from './Piece moves/King'
import useGetPawnMoves from './Piece moves/Pawn'
import useFilterMoves from './Filtration'
import { useSelector } from 'react-redux'

export function useNextMovesInclude() {
	const { nextMoves } = useSelector((store) => store.chess)
	return ([x, y]) =>
		nextMoves.map((i) => i.toString()).includes([x, y].toString())
}

export default function useGetNextMoves() {
	const { gameField } = useSelector((store) => store.chess)
	const filter = useFilterMoves()

	const bishop = useGetBishopMoves()
	const rook = useGetRookMoves()

	const steps = {
		K: useGetKingMoves(),
		N: useGetKnightMoves(),
		Q: (x, y) => [...rook(x, y), ...bishop(x, y)],
		B: useGetBishopMoves(),
		P: useGetPawnMoves(),
		R: useGetRookMoves(),
	}

	return (x, y, coverMoves) => {
		let piece = gameField[y][x][1]
		const getMoves = steps[piece]
		const filtered = filter(x, y, getMoves(x, y), coverMoves)
		return filtered
	}
}
