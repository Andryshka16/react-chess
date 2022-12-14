import { useSelector } from 'react-redux';
import {turns} from "../Move piece/Move piece";

let checkCRD = []

export default function useCheckForChecks([a,b], Color){

    const {gameField, turn} = useSelector(store => store.chess)

    let check = 0
    const color = Color || turns[turn]

    function checkCell([x,y], piece, i) {

        let name = gameField[y][x]

        if (name !== "0" && name !== turns[color] + "K") {

            if (name === color + "K" && Math.abs(i) === 1) {
                checkCRD = [x, y]
                check += 1
            }

            else if (name === color + "Q" || name === color + piece) {
                checkCRD = [x, y]
                check += 1
            }

            else if (piece === "B" && name === color + "P"
                && (color === "w"? 1 : -1) === i) {
                checkCRD = [x, y]
                check += 1
            }

            return true
        }
    }

    // Rook check

    for (let i = 1; a + i < 8; i++){
        if(checkCell([a + i, b],"R", i)){
            break
        }
    }
    for (let i = 1; a - i >=  0; i++) {
        if(checkCell([a - i, b],"R", i)){
            break
        }
    }
    for (let i = 1; b + i < 8; i++){
        if(checkCell([a, b + i],"R", i)){
            break
        }
    }
    for (let i = 1; b - i >= 0; i++){
        if(checkCell([a, b - i],"R", i)){
            break
        }
    }

    // Bishop check

    for (let i = 1; a + i < 8 && b + i < 8; i++){
        if(checkCell([a + i, b + i],"B", i)){
            break
        }
    }
    for (let i = 1; a - i >= 0 && b - i >= 0; i++){
        if(checkCell([a - i, b - i],"B", -i)){
            break
        }
    }
    for (let i = 1; b + i < 8 && a - i >= 0; i++){
        if(checkCell([a - i, b + i],"B", i)){
            break
        }
    }
    for (let i = 1; b - i >= 0 && a + i < 8; i++){
        if(checkCell([a + i, b - i],"B", -i)){
            break
        }
    }

    let knights = [
      [ a - 2, b - 1 ],  [ a - 1, b + 2 ],
      [ a - 2, b + 1 ],  [ a + 1, b + 2 ],
      [ a + 2, b - 1 ],  [ a - 1, b - 2 ],
      [ a + 2, b + 1 ],  [ a + 1, b - 2 ]
    ]

    knights = knights.filter(([x,y])=>
        x >= 0 && x < 8 &&
        y >= 0 && y < 8 &&
        gameField[y][x][0] !== turn
    )

    knights.forEach(([x,y])=>{
        if (gameField[y][x][1] === "N"){
            checkCRD = [x,y]
            check += 1
        }
    })

    return check
}