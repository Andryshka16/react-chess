import { useDispatch, useSelector } from 'react-redux'
import { setPromoted } from '../../../../../features/chess/chessSlice'
import PromotionPiece from './Promotion piece'

function getChoices([x, y]) {
    if (y === 0) {
        return x < 7 ? ['Q', 'N', 'B', 'R'] : ['N', 'Q', 'R', 'B']
    } else if (y === 7) {
        return x < 7 ? ['B', 'R', 'Q', 'N'] : ['R', 'B', 'N', 'Q']
    }
}

export default function Promotion() {
    const dispatch = useDispatch()
    const { promoted } = useSelector((store) => store.chess)
    const { initialized } = useSelector((store) => store.thisRoom)

    if (!promoted) return

    let { x2, y2 } = promoted

    const x = x2
    const y = initialized ? y2 : 7 - y2

    const choices = getChoices([x, y])

    const styles = {
        left: `${(x < 7 ? x : x - 1) * 80}px`,
        top: `${(y < 7 ? y : y - 1) * 80}px`
    }

    return (
        <>
            <div className={'promotion-shadow'} onClick={() => dispatch(setPromoted(null))}></div>
            <div className={'promotion'} style={styles}>
                {choices.map((piece, id) => (
                    <PromotionPiece key={piece} name={piece} index={id} />
                ))}
            </div>
        </>
    )
}
