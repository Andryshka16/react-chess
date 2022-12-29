import Notation from './Notation'
import Promotion from './Pieces/Logic/Pawn promotion/Promotion'
import Cells from './Cells/Cells'
import Pieces from './Pieces/Pieces'
import NextMoves from './Indicators/NextMoves'
import CheckIndicator from './Indicators/CheckIndicator'
import { useSelector } from 'react-redux'
import useCheckSituation from './Pieces/Logic/King activity/Check situation'
import { useEffect } from 'react'

export default function Chess() {
	const { gameField } = useSelector((store) => store.chess)
	const checkSituation = useCheckSituation()

	useEffect(checkSituation, [gameField])

	return (
		<div id={'chess'}>
			<Cells />
			<Pieces />
			<NextMoves />
			<Notation />
			<Promotion />
			<CheckIndicator />
		</div>
	)
}
