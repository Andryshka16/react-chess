import React from 'react'
import { useEffect } from 'react'
import ChessBoard from '../Chessboard/ChessBoard'

export default function Practice() {

    useEffect(() => { 
        console.log('in');
        return () => {
            console.log('out');
        }
    }, [])

    return <ChessBoard />
}
