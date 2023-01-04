import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { socket } from '../../App'
import createRoom from '../../features/rooms/createRoom'

const roomOptions = ['name', 'password']

export default function Form() {
    const [state, setState] = useState({})
    const dispatch = useDispatch()
    return (
        <div className="form-div">
            {roomOptions.map((key) => (
                <div className="input-field" key={key}>
                    <label htmlFor={key}>
                        <h2>Room {key}:</h2>
                    </label>
                    <input
                        type="text"
                        id={key}
                        value={state[key] || ''}
                        placeholder={key[0].toUpperCase() + key.slice(1)}
                        onChange={(event) => {
                            setState((prev) => ({
                                ...prev,
                                [key]: event.target.value
                            }))
                        }}
                    />
                </div>
            ))}
            <button
                className="createRoom"
                onClick={() => {
                    const { name, password } = state
                    socket.emit(
                        'createRoom',
                        createRoom(name, password, 'guest')
                    )
                }}
            >
                Create game!
            </button>
        </div>
    )
}
