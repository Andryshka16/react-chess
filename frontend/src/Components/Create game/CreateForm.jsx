import { useState } from 'react'

const roomOptions = ['name', 'password']

export default function Form() {
    const [state, setState] = useState({})
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
            <button className='createRoom'>Create game!</button>
        </div>
    )
}
