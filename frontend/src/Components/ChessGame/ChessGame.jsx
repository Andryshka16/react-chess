import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { socket } from '../../App'
import ChessBoard from '../Chessboard/ChessBoard'

export default function ChessGame() {
    const { myRoom, participants } = useSelector((store) => store.myRoom)

    if (participants === 1) {
        return (
            <h1 className="h1-info">
                Waiting for somebody to join your room...
            </h1>
        )
    } else if (participants === 0) {
        return (
            <h1 className="h1-info">Create room or join one to play chess!</h1>
        )
    } else {
        return <ChessBoard />
    }
}
