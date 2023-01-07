import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from './Button'

export default function GameOver() {

    const { gameField, mate, draw, check } = useSelector((store) => store.chess)
    const { color, readyPlayers } = useSelector((store) => store.thisRoom)

    if (!(mate || draw)) return
    const [x, y] = check

    return (
        <div className='gameover-shadow'>
            <h1 className='h1-info'>{gameField[y][x][0] !== color ? 'You won' : 'You lost'}</h1>
            <Button />
        </div>
    )
}
