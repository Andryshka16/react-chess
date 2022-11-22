import Piece from "./piece";
import { useSelector } from 'react-redux';


export default function Pieces() {

    let piecesArray = []
    const gameField = useSelector(store => store.gameField)

    console.log(gameField)

    for (let y = 0; y < 8; y++){
        for (let x = 0;x < 8; x++){
            if (gameField[y][x] !== "0"){
                piecesArray.push(
                    <Piece
                        x={x}
                        y={y}
                        key={`${x}${y}`}
                    />
                )
            }
        }
    }

    return piecesArray
}