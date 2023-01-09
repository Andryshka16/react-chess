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
    const { initialized } = useSelector((store) => store.thisRoom)
    const checkSituation = useCheckSituation()

    const styles = {
        rotate: (initialized ? 0 : 180) + 'deg'
    }

    useEffect(checkSituation, [gameField])

    return (
        <div className='chess' style={styles}>
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
