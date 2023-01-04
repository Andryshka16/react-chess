export function Room({ name, password, user, setModal }) {
    return (
        <>
            <div className="room">
                <div className="room-info">
                    <h2>{name}</h2>
                    <h3>{user}</h3>
                </div>

                <button
                    className="room-enter-btn"
                    onClick={() =>
                        setModal({
                            show: true,
                            password
                        })
                    }
                >
                    Join
                </button>
            </div>
        </>
    )
}
