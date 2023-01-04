import { useDispatch, useSelector } from 'react-redux'
import { socket } from '../../App'
import { deleteRoom } from '../../features/room/roomSlice'

export default function RoomAction({ id, setModal, password }) {
    const { myRoom } = useSelector((store) => store.room)
    const dispatch = useDispatch()
    const native = myRoom === id

    if (native) {
        return (
            <button
                className="btn remove-btn"
                onClick={() => {
                    socket.emit('removeRoom', id)
                    dispatch(deleteRoom())
                    console.log("room has been deleted");
                }}
            >
                Delete
            </button>
        )
    } else {
        return (
            <button
                className="btn join-btn"
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
}
