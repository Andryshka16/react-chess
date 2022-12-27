import useNextMovesInclude from './Logic/Next moves/Nextmoves include'
import { useDispatch, useSelector } from 'react-redux'
import {
	clearNextMoves,
	setNextMoves,
	setSelected,
} from '../../../features/chess/chessSlice'
import useGetNextMove from './Logic/Next moves/NextMoves'
import useMovePiece from './Logic/Move piece/Move piece'
import useStartFollowing from './Start motion'
export let recentPieceCrd
export let stateTable = [...Array(8)].map((_) => Array(8).fill('0'))

export default function Piece({ x, y }) {
	const { gameField, turn } = useSelector((store) => store.chess)
	const dispatch = useDispatch()
	const movePiece = useMovePiece()
	const nextMovesArray = useGetNextMove([x, y])
	const startFollowing = useStartFollowing(nextMovesArray, x, y)
	const nextMovesInclude = useNextMovesInclude()
	const name = gameField[y][x]

	let scales = {
		P: 0.6,
		B: 0.8,
		Q: 0.85,
		K: 0.8,
	}

	let marginTop = {
		P: '-6px',
		Q: '3px',
		R: '-2px',
		N: '-2px',
	}

	let scale = scales[name[1]] || 0.7

	let styles = {
		top: `${y * 60}px`,
		left: `${x * 60}px`,
		transform: `scale(${scale})`,
		marginTop: marginTop[name[1]],
	}

	function handleMouseOver(event) {
		if (name[0] === turn || nextMovesInclude([x, y]))
			event.target.style.transform = `scale(${scale * 1.2})`
	}

	function handleMouseOut(event) {
		event.target.style.transform = `scale(${scale})`
	}

	function handleMouseClick(event) {
		if (event.button !== 0) return

		if (name[0] === turn && !nextMovesInclude([x, y])) {
			dispatch(setNextMoves(nextMovesArray))
			dispatch(setSelected({ x, y, name }))
			nextMovesArray.length && startFollowing(event)
		} else if (nextMovesInclude([x, y])) movePiece(x, y)
		else dispatch(clearNextMoves())
	}

	return (
		<img
			src={`./images/${name}.png`}
			alt={'failed'}
			className={'figure'}
			style={styles}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			onMouseDown={handleMouseClick}
		></img>
	)
}
