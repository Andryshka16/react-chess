import { useState } from 'react'

function joinRoom(id) {
    console.log(id, true)
}

export default function ModalWindow({ state }) {
    const [modal, setModal] = state
    const [value, setValue] = useState('')

    return (
        modal.show && (
            <>
                <div className="room-shadow"></div>
                <div className="modal-enter">
                    <label htmlFor="password">Enter the password: </label>
                    <input
                        type="text"
                        id="password"
                        placeholder="Password"
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                    />
                    <div className="modal-buttons">
                        <button
                            className="btn play-btn"
                            onClick={() => {
                                if (modal.password === value) {
                                    joinRoom(modal.id)
                                } else {
                                    console.log('Wrong password')
                                    setValue('')
                                }
                            }}
                        >
                            Play
                        </button>
                        <button
                            className="btn cancel-btn"
                            onClick={() => setModal(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </>
        )
    )
}
