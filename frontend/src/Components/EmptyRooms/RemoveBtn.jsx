import { useDispatch } from 'react-redux'
import { socket } from '../../Socket'
import { showAlert } from '../../features/alert/alertSlice'
import { deleteRoom } from '../../features/thisRoom/thisRoomSlice'

export default function RemoveBtn({ id }) {
    const dispatch = useDispatch()
    const alert = (text) => dispatch(showAlert(text))

    return (
        <button
            className='btn remove-btn'
            onClick={() => {
                socket.emit('removeRoom', id)
                dispatch(deleteRoom())
                alert('Room has been deleted')
            }}
        >
            Delete
        </button>
    )
}
