import React from 'react'
import { useSelector } from 'react-redux'
import ChessBoard from '../Chessboard/ChessBoard'

export default function ChessGame() {
    const { id, participants } = useSelector((store) => store.thisRoom)

    if (participants === 1) {
        return <h1 className="h1-info">Waiting for somebody to join your room...</h1>
    } else if (participants === 0) {
        return <h1 className="h1-info">Create room or join one to play chess!</h1>
    } else {
        return <ChessBoard />
    }
}
