import { turns} from "../Move piece/Move piece";
import useKingCoordinates from "../King activity/Find king";
import { useSelector } from 'react-redux';

export default function usePieceIsPinned(piece){

    const { gameField, turn } = useSelector(store => store.chess)

    let [x1, y1] = piece
    let [x2, y2] = useKingCoordinates(turn + "K")

    let pinK = true
    let pinF = false

    if ((x1===x2 || y1===y2 || Math.abs(x2-x1) === Math.abs(y2-y1)) && !(x1 === x2 && y1 === y2)){

        let kX = x1 > x2? -1 : (x1 < x2? 1 : 0)
        let kY = y1 > y2? -1 : (y1 < y2? 1 : 0)

        for (let i = 1; i * kX + x1 !== x2 ||
                        i * kY + y1 !== y2; i++){

            if (gameField[y1+i*kY][x1+i*kX] !== "0"){
                pinK = false
                break
            }
        }

        let color = turns[turn]

        for (let i = 1; i * -kX + x1 < 8 && i * -kX + x1 >= 0 &&
                        i * -kY + y1 < 8 && i * -kY + y1 >= 0; i++) {

            let [x,y] = [x1 + i * -kX, y1 + i * -kY]
            let piece = gameField[y][x]

            if (color + "Q" === piece) {
                pinF = true
            }

            else if (color + "R" === piece && (kX === 0 || kY === 0)) {
                pinF = true
            }

            else if (color + "B" === piece && (kX !== 0 && kY !== 0)) {
                pinF = true
            }

            if (piece !== "0") break
        }
    }
    return pinF && pinK
}