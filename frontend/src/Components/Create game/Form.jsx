import { useState } from 'react'

const roomOptions = ['name', 'password']

export default function Form() {
    const [state, setState] = useState({})
    return (
        <div className="form-div">
            {roomOptions.map((key) => (
                <div className="input-field">
                    <label htmlFor={key}>
                        <h2>Room {key}:</h2>
                    </label>
                    <input type="text" id={key} value={state[key] || ""} onChange={(event) => {
                        setState(prev=>({...prev, [key]: event.target.value}))
                    }} />
                    
                </div>
            ))}
        </div>
    )
}
