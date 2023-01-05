import { useDispatch } from 'react-redux'
import { socket } from '../../App'
import { showAlert } from '../../features/alert/alertSlice'
import { deleteRoom } from '../../features/room/roomSlice'

export default function RemoveBtn({ id }) {
    const dispatch = useDispatch()

    return (
        <button
            className="btn remove-btn"
            onClick={() => {
                socket.emit('removeRoom', id)
                dispatch(deleteRoom())
                dispatch(showAlert('Room has been deleted'))
            }}
        >
            Delete
        </button>
    )
}
