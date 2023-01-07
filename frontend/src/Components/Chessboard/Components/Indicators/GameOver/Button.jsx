import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { socket } from '../../../../../Socket'

export function Button() {
    const { readyPlayers, id } = useSelector((store) => store.thisRoom)

    const color1 = 'rgb(105, 105, 105)'
    const color2 = 'green'

    const [ready, setReady] = useState(false)

    function handleClick() {
        if (ready) {
            socket.emit('unReadyToPlayAgain', id)
            setReady(false)
        } else {
            socket.emit('readyToPlayAgain', id)
            setReady(true)
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
                    Play again? <h4>{readyPlayers + '/2'}</h4>
                </>
            }
        </button>
    )
}
