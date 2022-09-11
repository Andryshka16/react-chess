import {useState} from "react";
import movePiece, {turn} from "./Logic/Move piece/Move piece";
import nextMovesInclude from "./Logic/Next moves/Nextmoves include";
import {getNextMove, nextMoves} from "./Logic/Next moves/NextMoves";
import {clearField} from "../Indicators/ShowNextMoves";
import startFollowing from "./Logic/Move piece/Drag and drog pieces/Start motion";
import {gameField} from "./Gamefield";
export let recentPieceCrd
export let stateTable = [...Array(8)].map(e => Array(8).fill("0"))

export default function Piece(props){

    const [piece, setPiece] = useState({
        x: props.x,
        y: props.y,
        name: gameField[props.y][props.x],
        from: null
    })

    if (!piece) return

    let {x, y, name} = piece

    gameField[y][x] = name
    stateTable[y][x] = setPiece

    if (piece.from) {
        gameField[piece.from.y][piece.from.x] = "0"
        stateTable[piece.from.y][piece.from.x] = "0"
    }


    let scales = {
        "P": 0.6, "B": 0.8,
        "Q": 0.85, "K": 0.8,
    }

    let marginTop = {
        "P": "-6px", "Q": "3px",
        "R": "-2px", "N": "-2px",
    }

    let scale = scales[name[1]] || 0.7

    let styles = {
        top: `${y * 60}px`,
        left: `${x * 60}px`,
        transform: `scale(${scale})`,
        marginTop: marginTop[name[1]],
    }

    function handleMouseOver(event) {

        if (name[0] === turn || nextMovesInclude([x,y]))
            event.target.style.transform = `scale(${scale * 1.2})`
    }

    function handleMouseOut(event) {
        event.target.style.transform = `scale(${scale})`
    }

    function handleMouseClick(event){

        if (event.button !== 0) return

        if (name[0] === turn && !nextMovesInclude([x,y])) {
            getNextMove([x,y], false)
            recentPieceCrd = [x, y, gameField[y][x], piece, setPiece]
            nextMoves.length && startFollowing(event)
        }

        else if (nextMovesInclude([x,y]))
            movePiece(x, y)

        else clearField()

    }

    return (
        <img
            src={`./images/${name}.png`}
            alt={"failed"}
            className={"figure"}
            style={styles}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onMouseDown={handleMouseClick}>
        </img>
    )
}