import {useState} from "react";

let turn = "w"
const turns = {"w":"b","b":"w"}

const color1 = "rgb(255,195,151)"
const color2 = "rgb(39,39,39)"

let recentPieceCrd, enPassing
let castlingMoved = []

let nextMoves = []
let a,b

let dots, setDots

let checkCRD = []
let coverMoves = []
let kingEscape = []

let gameField = [
    [ 'bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR' ],
    [ 'bP', 'wP', 'wP', 'bP', 'wP', 'bP', 'wP', 'wP' ],
    [ '0', '0', '0', '0', '0', '0', '0', '0' ],
    [ '0', '0', '0', '0', '0', '0', '0', '0' ],
    [ '0', '0', '0', '0', '0', '0', '0', '0' ],
    [ '0', '0', '0', '0', '0', '0', '0', '0' ],
    [ 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP' ],
    [ 'wR', "0", '0', '0', 'wK', '0', '0', 'wR' ]
]

// let gameField = [
//     [ 'bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR' ],
//     [ 'bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP' ],
//     [ '0', '0', '0', '0', '0', '0', '0', '0' ],
//     [ '0', '0', '0', '0', '0', '0', '0', '0' ],
//     [ '0', '0', '0', '0', '0', '0', '0', '0' ],
//     [ '0', '0', '0', '0', '0', '0', '0', '0' ],
//     [ 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP' ],
//     [ 'wR', "wN", 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR' ]
// ]

let gameFieldElements = [...Array(8)].map(() => Array(8).fill("0"))

const clearDots = ()=>{
    setDots([])
}

function drawDots(){
    setDots(nextMoves)
}

export function Dots(){

    [dots, setDots] = useState([])

    return (
        dots.map(elm=>
            <div
                className = "dot"
                style = {{top: `${elm[1]*60}px`, left: `${elm[0]*60}px`}}
                key={elm.toString()}>
            </div>
        )
    )
}


export function Cells(){

    function handleCellClick(x,y){

        if (nextMoves.map(i => i.toString()).includes([x,y].toString())) {
            movePiece(x,y)
        }
        else {
            clearField()
        }
    }

    return (
        <>
        {Array.from({length: 64}, (_,i)=>
            <div
                className={"cell"}
                key={i+"w"}
                style={{background: Math.floor(i/8)%2 ? (i%2?color1:color2): (i%2?color2:color1)}}
                onClick={()=>{handleCellClick(i % 8,(i - i % 8) / 8)}
            }
            ></div>
        )}
        </>
    )
}


export function Pieces() {

    let arr = []

    gameFieldElements.map(_=>["0","0","0","0","0","0","0","0","0","0",])
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

    return <>
        {arr}
    </>
}


function Piece(props){

    const [piece, setPiece] = useState({
        x: props.x,
        y: props.y,
        name: props.name || gameField[props.y][props.x],
        moved: false
    })

    if (piece === false){
        return
    }

    let {name} = piece

    gameField[piece.y][piece.x] = name

    let scales = {
        "P": 0.6,
        "Q": 0.85,
        "K": 0.8,
        "B": 0.8,
    }

    let marginTop = {
        "P": "-4px",
        "Q": "3px",
    }

    let scale = scales[name[1]] || 0.7

    let styles = {
        top: `${piece.y * 60}px`,
        left: `${piece.x * 60}px`,
        transform: `scale(${scale})`,
        marginTop: marginTop[name[1]],
    }

    function handleMouseOver(event) {
        event.target.style.transform = `scale(${scale * 1.2})`
    }

    function handleMouseOut(event) {
        event.target.style.transform = `scale(${scale})`
    }

    function handleMouseClick(){

        let {x,y} = piece


        if (gameField[y][x][0] === turn && !nextMoves.map(i => i.toString()).includes([x,y].toString())) {
            getNextMove(gameField[y][x],[x,y], false, [piece, setPiece])
        }

        else if (nextMoves.map(i => i.toString()).includes([x,y].toString())){

            if (turn === gameField[y][x][0]){

                let k = x > 4 ? 1 : -1

                movePiece(4 + 2*k, y)

                setPiece({
                    ...piece,
                    x: 4+k,
                    y: y,
                    moved: true
                })
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

    if (piece.moved){
        checkSituation()
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

function pawnPass(x,y,setPiece){

    // document.querySelectorAll(".figure").forEach(i=>{
    //     i.style.pointerEvents = "none"
    // })

    setPiece(
        {
            name: prompt("Enter piece name"),
            moved: true,
            x,y}
    )


}

function clearField(){
    clearDots()
    nextMoves = []
}

function movePiece(x2, y2){

    clearField()

    let [x1, y1, [piece, setPiece]] = recentPieceCrd

    turn = turns[turn]

    if (gameField[y1][x1][1]==="P" && x1!==x2 && gameField[y2][x2]==="0"){
        enPassing.remove()
    }

    else if (gameField[y1][x1][1]==="R" && (x1 === 0 || x1===7)){
        castlingMoved.push(x1+gameField[y1][x1])
    }

    else if (gameField[y1][x1][1]==="K" && x1 === 4){
        castlingMoved.push(gameField[y1][x1])
    }

    else if (gameField[y1][x1][1] === "P" && Math.abs(y2-y1) === 2) {
        enPassing = {
            x: x2,
            y: y2,
            remove: () => setPiece(false)
        }
    }

    if (gameField[y1][x1][1]==="P" && (y2===7 || y2===0)){
        pawnPass(x2,y2,setPiece)
    }
    else {
        setPiece({
            ...piece,
            x: x2,
            y: y2,
            moved: true
        })
    }

    gameField[y1][x1] = "0"

}

function getNextMove(piece, coordinates, check=false, pieceObjList){

    [a, b] = coordinates

    recentPieceCrd = [a, b, pieceObjList]
    nextMoves = []

    switch (true) {

        case piece[1] === "K":
            nextMoves = [
                [a - 1, b - 1], [a - 1, b],
                [a - 1, b + 1], [a, b + 1],
                [a + 1, b - 1], [a, b - 1],
                [a + 1, b + 1], [a + 1, b],
            ]
            break

        case piece[1] === "N":
            nextMoves = [
                [a + 2, b - 1], [a + 2, b + 1],
                [a - 2, b + 1], [a - 2, b - 1],
                [a + 1, b + 2], [a - 1, b + 2],
                [a + 1, b - 2], [a - 1, b - 2]
            ]
            break

        case  piece[1] === "Q":
            getBishopMoves()
            getRookMoves()
            break

        case piece[1] === "B":
            getBishopMoves()
            break

        case piece[1] === "R":
            getRookMoves()
            break

        case piece[1] === "P":
            getPawnMoves(piece)
            break
    }

    filterNextMoves(piece)

    if (check){
        return nextMoves
    }

    drawDots()
}

function getRookMoves(){

    for (let i = 1; a + i < 8; i++){
        nextMoves.push([a + i, b])
        if(gameField[b][a + i] !== "0"){break}
    }
    for (let i = 1; a-i>=0; i++) {
        nextMoves.push([a - i, b])
        if (gameField[b][a - i] !== "0") {break}
    }
    for (let i = 1; b+i<8; i++){
        nextMoves.push([a, b + i])
        if(gameField[b + i][a] !== "0"){break}
    }
    for (let i = 1; b-i>=0; i++){
        nextMoves.push([a, b - i])
        if(gameField[b - i][a] !== "0"){break}
    }

}

function getBishopMoves(){

    for (let i = 1; a + i < 8 && b + i < 8; i++){
        nextMoves.push([a + i, b + i])
        if(gameField[b + i][a + i] !== "0"){break}
    }
    for (let i = 1; a - i >= 0 && b - i >= 0; i++){
        nextMoves.push([a - i, b - i])
        if(gameField[b - i][a - i] !== "0"){break}
    }
    for (let i = 1; b + i < 8 && a - i >= 0; i++){
        nextMoves.push([a - i, b + i])
        if(gameField[b + i][a - i] !== "0"){break}
    }
    for (let i = 1; b - i >= 0 && a + i < 8; i++){
        nextMoves.push([a + i, b - i])
        if(gameField[b - i][a + i] !== "0"){break}
    }
}

function getPawnMoves(pawn){

    let k = pawn === "wP"? -1 : 1

    if (b === 1 && pawn==="bP" && gameField[b + k][a] === "0"){
        nextMoves = [[a, b + k], [a, b + 2*k]]}

    else if (b === 6 && pawn==="wP" && gameField[b + k][a] === "0"){
        nextMoves = [[a, b + k], [a, b + 2*k]]}

    else {nextMoves = [[a, b + k]]}

    nextMoves = nextMoves.filter(element=>gameField[element[1]][element[0]]==="0")

    if (a > 0 && gameField[b + k][a - 1] !== "0"){
        nextMoves.push([a-1, b+k])
    }

    if (a < 7 && gameField[b + k][a + 1] !== "0"){
        nextMoves.push([a+1, b+k])
    }

    if (a > 0 && enPassing && b === enPassing.y && a + 1 === enPassing.x){
        nextMoves.push([a+1, b+k])
    }

    if (a < 7 && enPassing && b === enPassing.y && a - 1 === enPassing.x){
        nextMoves.push([a-1, b+k])
    }

}

function isPinned([x1,y1], [x2,y2]){

    let pinK = true
    let pinF = false

    if ((x1===x2 || y1===y2 || Math.abs(x2-x1) === Math.abs(y2-y1)) && !(x1===x2 && y1===y2)){

        let kX = x1 > x2? -1 : (x1 < x2? 1 : 0)
        let kY = y1 > y2? -1 : (y1 < y2? 1 : 0)

        for (let i = 1; i * kX + x1 !== x2 ||
                        i * kY + y1 !== y2; i++){

            if (gameField[y1+i*kY][x1+i*kX]!=="0"){
                pinK = false
                break
            }
        }

        for (let i = 1; i * -kX + x1 < 8 && i * -kX + x1 >= 0 &&
                        i * -kY + y1 < 8 && i * -kY + y1 >= 0; i++) {

            if ([turns[turn]+"Q", turns[turn]+"R"]
                    .includes(gameField[y1+i*-kY][x1+i*-kX]) && (kX===0 || kY===0)) {
                    pinF = true}

            else if ([turns[turn]+"Q", turns[turn]+"B"]
                    .includes(gameField[y1+i*-kY][x1+i*-kX]) && (kX!==0 && kY!==0)) {
                    pinF = true
                }

            else if (gameField[y1+i*-kY][x1+i*-kX] !== "0"){
                break
            }
        }
    }
    return pinF && pinK
}

function filterNextMoves(piece){

    nextMoves = nextMoves.filter(element =>
        element[0] >= 0 && element[0] < 8
        && element[1] >= 0 && element[1] < 8
        && gameField[element[1]][element[0]][0] !== piece[0]
    )

    if (piece[1]==="K"){
        nextMoves = nextMoves.filter(i=>!checkForChecks(i))
        canCastle(piece)
    }

    if (coverMoves.toString() !== "" && piece[1]!=="K"){
        nextMoves = nextMoves.filter(i=>coverMoves.map(e => e.toString()).includes(i.toString()))
    }

    let [x2, y2] = kingCoordinates(turn+"K")

    if (isPinned([a, b], [x2, y2])){

        console.log(gameField[b][a], "is Pinned")

        nextMoves = nextMoves.filter(
            function (move){
                if (a===x2){
                    return move[0] === x2
                }
                else if (b===y2){
                    return move[1] === y2
                }
                else{
                    return x2+y2 === move[0]+move[1]
                }
            }
        )
    }

}

function canCastle(king) {

    let rooks = [a+3, a-4]

    for (let rook of rooks) {

        let suitable = true

        switch (true) {
            case a !== 4:
                suitable = false
                break
            case gameField[b][rook] !== turn + "R":
                suitable = false
                break
            case castlingMoved.includes(king):
                suitable = false
                break
            case castlingMoved.includes(rook+turn+"R"):
                suitable = false
                break
            case checkForChecks([a, b]):
                suitable = false
                break
        }

        for (let i = Math.min(rook, a) + 1; i < Math.max(rook, a); i++) {

            if (gameField[b][i] !== "0") {
                suitable = false
                break
            }
            else if (i !== 1 && checkForChecks([i, b])) {
                suitable = false
                break
            }
        }

        if (suitable){nextMoves.push([rook, b])}
    }
}


function checkForChecks([a,b], color=turns[turn]){

    let check = 0

    function checkCell([x,y],piece,i) {

        if (gameField[y][x] !== "0" &&
            gameField[y][x] !== turns[color] + "K") {

            if (gameField[y][x] === color + "K" && Math.abs(i) === 1) {
                checkCRD = [x, y]
                check += 1
            }

            else if (gameField[y][x] === color + "Q" ||
                gameField[y][x] === color + piece) {
                checkCRD = [x, y]
                check += 1
            }

            else if (piece==="B" &&
                gameField[y][x] === color + "P"
                && (color==="w"?1:-1)===i) {
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

    let pawns = color==="w"? [[a - 1, b + 1], [a + 1, b + 1]]: [[a - 1, b - 1], [a + 1, b - 1]]
    for (let i of pawns){

    }

    let knights = [
      [ a-2, b-1 ],  [ a-1, b+2],
      [ a-2, b+1 ],  [ a+1, b+2],
      [ a+2, b-1 ],  [ a-1, b-2],
      [ a+2, b+1 ],  [ a+1, b-2]
    ]

    knights = knights.filter(i=>
        i[0] >= 0 &&
        i[0] < 8 &&
        i[1] >= 0 &&
        i[1] < 8 &&
        gameField[i[1]][i[0]][0] !== turn
    )

    knights.forEach(knight=>{
        let [x,y] = knight
        if (gameField[y][x][1]==="N"){
            checkCRD = knight
            check += 1
        }
    })

    return check
}

function kingCoordinates(king){
    let kng
    gameField.forEach((row,y)=>{
        row.forEach((column,x)=>{
            if (column === king){
                kng = [x,y]
            }
        })
    })
    return kng
}

function checkMate([a1,b1], [a2,b2]) {

    kingEscape = []
    let mate = true

    kingEscape.push(...getNextMove(turn+"K",[a1,b1],true))

    if (checkForChecks([a1,b1]) > 1){

        if (kingEscape.toString()) {
            mate = false
            coverMoves.push("No moves for pieces except the king")
        }
        return mate
    }

    let xK = a1===a2? 0: 1
    let yK = b1===b2? 0: 1

    if (gameField[b2][a2][1]!=="N"){

        for (let i=1; i*xK+Math.min(a1,a2)<Math.max(a1,a2) ||
                      i*yK+Math.min(b1,b2)<Math.max(b1,b2); i++){
            coverMoves.push([a1 + (a1 < a2 ? i: -i) * xK, b1 - (b1 > b2 ? i: -i) * yK])
        }
    }
    coverMoves.push([a2,b2])

    gameField.forEach((row,i)=>{
        row.forEach((piece,j)=>{

            if (piece[0] === turn){

                if (getNextMove(piece,[j,i],true).toString()){
                    mate = false
                }
            }
        })
    })

    return mate
}

function checkForDraw(turn) {

    let draw = true

    gameField.forEach((row,i)=>{

        row.forEach((piece,j)=>{

            if (piece[0] === turn){
                if (getNextMove(piece,[j,i],true).toString()){
                    draw = false
                }
            }
        })
    })

    return draw
}

function checkSituation(){

    coverMoves = []

    if (checkForChecks(kingCoordinates(turn+"K"))){
        console.log("CHECK!", checkCRD)
        if (checkMate(kingCoordinates(turn+"K"), checkCRD)){
            console.log("MATE, GAME OVER!")
        }
    }

    if (checkForDraw(turn) && !checkForChecks(kingCoordinates(turn+"K"))){
        console.log("DRAW, GAME OVER!")
    }
}
