import { useNextMovesInclude } from './Logic/Next moves/NextMoves'
import { useDispatch, useSelector } from 'react-redux'
import {
	movePiece,
	setNextMoves,
	setSelected,
} from '../../../features/chess/chessSlice'
import useGetNextMoves from './Logic/Next moves/NextMoves'
import useStartDragging from './Start dragging'

export default function Piece({ x, y }) {
	const { gameField, turn } = useSelector((store) => store.chess)
	const dispatch = useDispatch()
	const getNextMoves = useGetNextMoves()
	const nextMovesArray = getNextMoves(x, y)
	const startFollowing = useStartDragging(nextMovesArray, x, y)
	const nextMovesInclude = useNextMovesInclude()

	const name = gameField[y][x]

	let scales = {
		P: 0.6,
		B: 0.8,
		Q: 0.85,
		K: 0.8,
	}

	let marginTop = {
		P: '-8px',
		Q: '3px',
		R: '-3px',
		N: '-3px',
	}

	let scale = scales[name[1]] || 0.7

	let styles = {
		top: `${y * 80}px`,
		left: `${x * 80}px`,
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
			dispatch(setSelected({ x1: x, y1: y, name }))
			if (nextMovesArray.length) startFollowing(event)
		} else if (nextMovesInclude([x, y])) {
			dispatch(movePiece([x, y]))
		} else {
			dispatch(setNextMoves([]))
		}
	}

	return (
		<img
			src={`./images/${name}.png`}
			alt={'failed'}
			className={'piece'}
			style={styles}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			onMouseDown={handleMouseClick}
		></img>
	)
}
