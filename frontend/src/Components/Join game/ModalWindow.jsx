export function ModalWindow({ modalWindow }) {
    const [modal, setModal] = modalWindow

    return (
        modal.show && (
            <>
                <div className="room-shadow"></div>
                <div className="modal-enter">
                    <label htmlFor="password">Enter the password: </label>
                    <input type="text" id="password" />
                    <div className="modal-buttons">
                        <button className="green-btn play-btn">Play!</button>
                        <button className="green-btn cancel-btn" onClick={()=>setModal(false)}>Cancel</button>
                    </div>
                </div>
            </>
        )
    )
}
