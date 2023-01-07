import {
    Cells,
    Pieces,
    Promotion,
    Notation,
    NextMoves,
    CheckIndicator,
    HiglightedMoves,
    GameOver
} from './Components'
import useCheckSituation from './Components/Pieces/Logic/King activity/Check situation'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function Chess() {
    const { gameField } = useSelector((store) => store.chess)
    const checkSituation = useCheckSituation()

    useEffect(checkSituation, [gameField])

    return (
        <div className='chess'>
            <Cells />
            <Pieces />
            <NextMoves />
            <HiglightedMoves />
            <Notation />
            <Promotion />
            <GameOver />
            <CheckIndicator />
        </div>
    )
}
