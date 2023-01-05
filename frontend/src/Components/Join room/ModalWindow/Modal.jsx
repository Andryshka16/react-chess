import { useState } from 'react'
import CancelBtn from './CancelBtn'
import PlayBtn from './PlayBtn'

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
                        <PlayBtn
                            passwordIsCorrect={modal.password === value}
                            clearInput={() => setValue('')}
                        />
                        <CancelBtn closeModal={() => setModal(false)} />
                    </div>
                </div>
            </>
        )
    )
}
