import Notation from './Game/Notation'
import Promotion from './Game/Pieces/Logic/Pawn promotion/Promotion'
import PromotionContext from './Game/Pieces/Logic/Pawn promotion/Promotion context'
import Cells from './Game/Cells/Cells'
import Pieces from './Game/Pieces/Pieces'
import NextMoves from './Game/Indicators/NextMoves'
import CheckIndicator from './Game/Indicators/CheckIndicator'
import { useSelector } from 'react-redux'
import useCheckSituation from './Game/Pieces/Logic/King activity/Check situation'
import { useEffect } from 'react'

export default function Chess() {
	const { gameField } = useSelector((store) => store.chess)
    const checkSituation = useCheckSituation()
    
	useEffect(checkSituation, [gameField])

	return (
		<PromotionContext>
			<Cells />
			<Pieces />
			<NextMoves />
			<Notation />
			<Promotion />
			<CheckIndicator />
		</PromotionContext>
	)
}
