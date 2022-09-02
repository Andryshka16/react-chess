    // if (gameField[y1][x1][1]==="K" || gameField[y1][x1][1]==="R"
    //     && !castlingMoved.includes(gameFieldElements[y1][x1])) {
    //         castlingMoved.push(gameFieldElements[y1][x1])
    // }

    // if (gameField[y1][x1][1]==="K" && Math.abs(x2-x1) > 1){
    //     let k = x2 > x1? 1 : -1
    //     gameFieldElements[y1][x1+k] = gameFieldElements[y2][x2]
    //     gameFieldElements[y1][x1+2*k] = gameFieldElements[y1][x1]
    //     gameFieldElements[y1][x1+k].current.style.left = `${(x1+k)*60-60*8}px`
    //     gameFieldElements[y1][x1+2*k].current.style.left = `${(x1+2*k)*60-60*8}px`
    //     gameFieldElements[y1][x1] = "0"
    //     gameFieldElements[y2][x2] = "0"
    //     gameField[y1][x1+k] = gameField[y2][x2]
    //     gameField[y1][x1+2*k] = gameField[y1][x1]
    //     gameField[y1][x1] = "0"
    //     gameField[y2][x2] = "0"
    //     nextMoves = []
    //     return
    // }

    // if (gameField[y2][x2] !== "0"){
    //     gameFieldElements[y2][x2].current.remove()
    // }

    // if (gameField[y2][x2] === "0" && x2 !== x1 && gameField[y1][x1][1]==="P"){
    //     gameFieldElements[gameField[y2][x2]==="bP"?y2-1:y2+1][x2].current.remove()
    //     gameField[gameField[y2][x2]==="bP"?y2-1:y2+1][x2] = "0"
    // }

    // gameField[y2][x2] = gameField[y1][x1]
    // gameField[y1][x1] = "0"
    //
    // gameFieldElements[y2][x2] = gameFieldElements[y1][x1]
    // gameFieldElements[y1][x1] = "0"

    // gameFieldElements[y2][x2].current.style.top = `${y2*60}px`
    // gameFieldElements[y2][x2].current.style.left = `${x2*60}px`

    // if ((y2===0 || y2===7) && gameField[y2][x2][1]==="P"){
    //     pawnPass(x2,y2)
    // }





        //     if (promoted.toString()){
        //
        //     document.querySelectorAll(".figure").forEach(i=>{
        //         i.style.pointerEvents = "all"
        //     })
        //
        //     pending[0] = [gameField[y][x], pending[0][1], pending[0][2]]
        //     pending.forEach(([n, x, y]) => gameField[y][x]=n)
        //
        //     drawPieces(pending)
        //
        //     setPending([])
        //     setPromoted([])
        //
        //
    //     checkSituation()
        //     return
        // }










//
//     import {useState} from "@types/react";
//
//     function pawnPass(x2, y2){
//
//     gameFieldElements[y2][x2].current.remove()
//
//     let pend = [
//         [x2, y2],
//         [x2, y2 === 7? y2 - 1: y2 + 1],
//         [x2 < 7 ? x2 + 1: x2 - 1, y2],
//         [x2 < 7 ? x2 + 1: x2 - 1, y2 === 7? y2 - 1: y2 + 1]
//     ]
//
//     setPending(pend.map(([x,y]) => [(gameField[y][x]),x,y]))
//
//     document.querySelectorAll(".figure").forEach(i=>{
//         i.style.pointerEvents = "none"
//     })
//     setPromoted([x2,y2])
//
// }

// export function PromotedChoice() {
//
//     [promoted, setPromoted] = useState([])
//     let [x2,y2] = promoted
//
//     let styles={
//         visibility: promoted.toString()?"visible":"hidden",
//         top:` ${y2 * 60 - y2 * 60 / 7}px`,
//         left: `${x2 < 7? (x2) * 60: x2 * 60-60}px`
//     }
//
//     return (
//         promoted && <div className={"pass"} style={styles}></div>
//     )
// }
//
// function drawPieces(pending) {
//
//     pending = pending.map(([n,x,y])=>n!=="0" && <Piece x={x} y={y} key={n+x+y}/>)
//     setAllPieces([...AllPieces, pending])
//
// }