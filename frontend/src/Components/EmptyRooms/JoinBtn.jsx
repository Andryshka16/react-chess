export default function JoinBtn({ id, setModal, password }) {
    return (
        <button
            className='btn join-btn'
            onClick={() =>
                setModal({
                    show: true,
                    id,
                    password
                })
            }
        >
            Join
        </button>
    )
}
