import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from './Button'
import { socket } from '../../../../../Socket'

export default function GameOver() {
    const { gameField, mate, draw, check } = useSelector((store) => store.chess)
    const { color, readyPlayers, id } = useSelector((store) => store.thisRoom)

    if (readyPlayers === 2) {
        socket.emit('restart', id)
    }

    if (!(mate || draw)) return

    const info = draw ? 'Draw' : gameField[check[1]][check[0]][0] !== color ? 'You won' : 'You lost'

    return (
        <div className='gameover-shadow'>
            <h1 className='h1-info'>{info}</h1>
            <Button />
        </div>
    )
}
