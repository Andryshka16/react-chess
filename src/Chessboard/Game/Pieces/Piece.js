import {useState} from "react";
import movePiece, {turn} from "./Logic/Move piece/Move piece";
import {getNextMove} from "./Logic/Next moves/NextMoves";
import {clearField} from "../Dots";
import doCastling from "./Logic/Move piece/Castle king";
import {gameField} from "./Gamefield";
import nextMovesInclude from "./Nextmoves include";
export let recentPieceCrd

export default function Piece(props){

    const [piece, setPiece] = useState({
        x: props.x,
        y: props.y,
        name: gameField[props.y][props.x],
        from: null
    })

    if (!piece){
        return
    }

    let {x, y, name} = piece

    gameField[y][x] = name

    if (piece.from) gameField[piece.from.y][piece.from.x] = "0"

    let scales = {
        "P": 0.6,
        "Q": 0.85,
        "K": 0.8,
        "B": 0.8,
    }

    let marginTop = {
        "P": "-6px",
        "Q": "3px",
        "R": "-2px",
        "N": "-2px",
    }

    let scale = scales[name[1]] || 0.7

    let styles = {
        top: `${y * 60}px`,
        left: `${x * 60}px`,
        transform: `scale(${scale})`,
        marginTop: marginTop[name[1]],
    }

    function handleMouseOver(event) {
        if (name[0] === turn || nextMovesInclude([x,y])){
            event.target.style.transform = `scale(${scale * 1.2})`
        }
    }

    function handleMouseOut(event) {
        event.target.style.transform = `scale(${scale})`
    }

    function handleMouseClick(){

        if (name[0] === turn && !nextMovesInclude([x,y])) {
            getNextMove([x,y], false)

            recentPieceCrd = [x, y, gameField[y][x], piece, setPiece]
        }

        else if (nextMovesInclude([x,y])){

            if (name[0] === turn){
                doCastling(piece, setPiece)
            }
            else {
                setPiece(false)
                movePiece(x, y)
            }
        }
        else {
            clearField()
        }
    }

    return (
        <img
            src={`./images/${name}.png`}
            alt={"failed"}
            className={"figure"}
            style={styles}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleMouseClick}>
        </img>
    )
}