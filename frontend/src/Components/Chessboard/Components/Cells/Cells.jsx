import { useSelector } from 'react-redux'
import useHandleCellClick from './handleCellClick'

function Cell({ x, y }) {
    const [color1, color2] = useSelector((store) => store.chess.colors)
    const { initialized } = useSelector((store) => store.thisRoom)
    const handleCellClick = useHandleCellClick(x, y)

    const styles = {
        background: (x + (initialized ? y : 7 - y)) % 2 ? color2 : color1
    }

    return <div className={'cell'} style={styles} onClick={handleCellClick}></div>
}

export default function Cells() {
    return Array.from({ length: 64 }, (_, i) => <Cell x={i % 8} y={Math.floor(i / 8)} key={i} />)
}
