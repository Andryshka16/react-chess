import { useSelector } from 'react-redux'
import Piece from './piece'

export default function Pieces() {
    const { gameField } = useSelector((store) => store.chess)

    const pieces = []

    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            if (gameField[y][x] !== '0') {
                pieces.push(<Piece x={x} y={y} key={`${x}${y}`} />)
            }
        }
    }

    return pieces
}
