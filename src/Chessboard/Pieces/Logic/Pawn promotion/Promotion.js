import { useSelector } from 'react-redux'
import PromotionPiece from './Promotion piece'

function getChoices([x, y]) {
	if (y === 0) {
		return x < 7 ? ['Q', 'N', 'B', 'R'] : ['N', 'Q', 'R', 'B']
	} else if (y === 7) {
		return x < 7 ? ['B', 'R', 'Q', 'N'] : ['R', 'B', 'N', 'Q']
	}
}

export default function Promotion() {
	const { promoted } = useSelector((store) => store.chess)

	if (!promoted.length) return

	const [x, y] = promoted
	const choices = getChoices([x, y])

	const styles = {
		left: `${(x < 7 ? x : x - 1) * 60}px`,
		top: `${(y < 7 ? y : y - 1) * 60}px`,
	}

	return (
		<>
			<div className={'shadow'}></div>
			<div className={'promotion'} style={styles}>
				{choices.map((piece, id) => (
					<PromotionPiece key={piece} name={piece} index={id} />
				))}
			</div>
		</>
	)
}
