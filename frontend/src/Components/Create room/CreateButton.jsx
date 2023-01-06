import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { socket } from '../../App'
import { showAlert } from '../../features/alert/alertSlice'
import { initializeRoom } from '../../features/thisRoom/thisRoomSlice'
import buildRoom from './buildRoom'

export function CreateButton({ globalState }) {
    const { id } = useSelector((store) => store.thisRoom)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const alert = (text) => dispatch(showAlert(text))

    const [{ name, password }, setState] = globalState
    const newRoom = buildRoom(name, password, 'guest')

    return (
        <button
            className="createRoom"
            onClick={() => {
                if (!name.trim() || !password.trim()) {
                    alert('Cannot create empty room!')
                } else if (id) {
                    alert('Cannot have more than one room!')
                } else {
                    socket.emit('createRoom', newRoom)
                    socket.emit('joinRoom', newRoom.id)
                    dispatch(initializeRoom(newRoom.id))
                    navigate('/chess')
                    alert('Room has been created.')
                }
                setState({ name: '', password: '' })
            }}
        >
            Create room!
        </button>
    )
}
