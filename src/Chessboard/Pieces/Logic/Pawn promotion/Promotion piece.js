import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const turns = { w: 'b', b: 'w' }

function togglePointerEvents(state) {
	document
		.querySelectorAll('.figure')
		.forEach((p) => (p.style.pointerEvents = state))
}

export default function PromotionPiece({ index, name }) {
	const dispatch = useDispatch()
	const { selected, turn } = useSelector((store) => store.chess)

	let scales = {
		Q: 0.85,
		B: 0.8,
	}

	let marginTop = {
		Q: '3px',
		R: '-1px',
	}

	let scale = scales[name] || 0.7

	const styles = {
		top: `${Math.floor(index / 2) * 60}px`,
		left: `${(index % 2) * 60}px`,
		transform: `scale(${scale})`,
		marginTop: marginTop[name],
	}

	function handleMouseOver(event) {
		event.target.style.transform = `scale(${scale * 1.2})`
	}

	function handleMouseOut(event) {
		event.target.style.transform = `scale(${scale})`
	}

	function handleMouseClick() {
		// let [x1, y1, , , setPiece] = recentPieceCrd
		togglePointerEvents('all')

		// updateState(setPiece,{
		//     name: turns[turn] + name,
		//     x,
		//     y,
		//     from: {x: x1, y: y1}
		// })

		// setPromoted(false)
	}

	return (
		<img
			src={`./images/${turns[turn] + name}.png`}
			alt={'failed'}
			className={'figure'}
			style={styles}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			onClick={handleMouseClick}
		></img>
	)
}
