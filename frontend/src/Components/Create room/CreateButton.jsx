import { useDispatch, useSelector } from 'react-redux'
import { socket } from '../../App'
import { showAlert } from '../../features/alert/alertSlice'
import { createRoom } from '../../features/room/roomSlice'
import buildRoom from './buildRoom'

export function CreateButton({ globalState }) {
    const { myRoom } = useSelector((store) => store.room)
    const dispatch = useDispatch()

    const [{ name, password }, setState] = globalState
    const newRoom = buildRoom(name, password, 'guest')

    return (
        <button
            className="createRoom"
            onClick={() => {
                if (!name.trim() || !password.trim()) {
                    dispatch(showAlert('Cannot create empty room!'))
                } else if (myRoom) {
                    dispatch(showAlert('Cannot have more than one room!'))
                    setState({ name: '', password: '' })
                } else {
                    setState({ name: '', password: '' })
                    socket.emit('createRoom', newRoom)
                    dispatch(createRoom(newRoom.id))
                    dispatch(showAlert('Room has been created.'))
                }
            }}
        >
            Create room!
        </button>
    )
}
