import Piece from "./Piece";
import {gameField} from "./Gamefield";

export default function Pieces() {

    let arr = []

    for (let y = 0; y < 8; y++){
        for (let x = 0;x < 8; x++){
            if (gameField[y][x]!=="0"){
                arr.push(
                    <Piece
                        x={x}
                        y={y}
                        key={`${x}${y}`}
                    />
                )
            }
        }
    }

    return arr
}