import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setChess } from '../../features/chess/chessSlice'
import { setOnlineChess } from '../../features/online/onlineSlice'
import ChessBoard from '../Chessboard/ChessBoard'

export default function OnlineGame() {
    const { id, participants } = useSelector((store) => store.thisRoom)
    const { online } = useSelector((store) => store)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setChess(online))
    }, [online])

    if (participants === 1) {
        return <h1 className='h1-info'>Waiting for somebody to join your room...</h1>
    } else if (participants === 0) {
        return <h1 className='h1-info'>Create room or join one to play chess!</h1>
    } else {
        return (
            <>
                <h2>Room id: {id}</h2>
                <ChessBoard />
            </>
        )
    }
}
