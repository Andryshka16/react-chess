import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setChess } from '../../features/chess/chessSlice'
import { setPracticeChess } from '../../features/practice/practiceSlice'
import ChessBoard from '../Chessboard/ChessBoard'

export default function Practice() {
    const { chess, practice } = useSelector((store) => store)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setChess(practice))
    }, [])

    useEffect(() => {
        dispatch(setPracticeChess(chess))
    }, [chess])

    return <ChessBoard />
}
