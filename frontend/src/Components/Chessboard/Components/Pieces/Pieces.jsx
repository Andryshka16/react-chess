import { useSelector } from 'react-redux'
import Piece from './piece'

export default function Pieces() {
    const { gameField } = useSelector((store) => store.chess)

    let piecesArray = []

    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            if (gameField[y][x] !== '0') {
                piecesArray.push(<Piece x={x} y={y} key={`${x}${y}`} />)
            }
        }
    }

    return piecesArray
}
