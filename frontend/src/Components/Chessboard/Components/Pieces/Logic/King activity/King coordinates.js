import { useSelector } from 'react-redux'

export default function useKingCoordinates(king) {
    const { gameField } = useSelector((store) => store.chess)

    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            if (gameField[y][x] === king) {
                return [x, y]
            }
        }
    }
}
