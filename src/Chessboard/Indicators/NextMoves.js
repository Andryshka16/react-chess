import { useSelector } from 'react-redux'
import Dot from './Dot'
import Target from './Target'

export default function NextMoves() {
	const { gameField, nextMoves } = useSelector((store) => store.chess)

	return nextMoves.map(([x, y]) =>
		gameField[y][x] === '0' ? (
			<Dot x={x} y={y} key={`d${x}${y}`} />
		) : (
			<Target x={x} y={y} key={`t${x}${y}`} />
		)
	)
}
