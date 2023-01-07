import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { restart } from '../../../../../features/chess/chessSlice'
import { unReadyToPlay, readyToPlay } from '../../../../../features/thisRoom/thisRoomSlice'
import { socket } from '../../../../../Socket'

export function Button() {
    const { readyPlayers, id } = useSelector((store) => store.thisRoom)
    const dispatch = useDispatch()

    const color1 = 'rgb(105, 105, 105)'
    const color2 = 'green'

    const [ready, setReady] = useState(false)

    function handleClick() {
        if (ready) {
            socket.emit('unReadyToPlayAgain', id)
            setReady(false)
            dispatch(unReadyToPlay())
        } else {
            if (readyPlayers === 1) {
                socket.emit('restart', id)
            } else {
                socket.emit('readyToPlayAgain', id)
                dispatch(readyToPlay())
                setReady(true)
            }
        }
    }

    return (
        <button
            style={{
                backgroundColor: ready ? color2 : color1
            }}
            className='play-again'
            onClick={handleClick}
        >
            {
                <>
                    Play again?<h4>{readyPlayers + '/2'}</h4>
                </>
            }
        </button>
    )
}
