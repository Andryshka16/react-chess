import {gameField} from "../../Gamefield";


export default function kingCoordinates(king){

    for (let y = 0; y < 8; y++){
        for (let x = 0; x < 8; x++){
            if (gameField[y][x] === king){
                return [x,y]
            }
        }
    }
}