import movePiece from "./Move piece";

export default function doCastling(piece, setRook){

    const {x, y} = piece
    let k = x > 4 ? 1 : -1

    movePiece(4 + 2*k, y)

    setRook({
        ...piece,
        x: 4+k,
        y,
        from: {x, y}
    })
}