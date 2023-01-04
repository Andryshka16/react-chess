import { useDispatch, useSelector } from 'react-redux'
import { socket } from '../../App'
import { createRoom } from '../../features/room/roomSlice'

function createNewRoom(name, password, user) {
    return {
        name,
        password,
        user,
        id: new Date().getTime()
    }
}

export function CreateButton({ state }) {
    const { myRoom } = useSelector((store) => store.room)
    const dispatch = useDispatch()

    const { name, password } = state
    const newRoom = createNewRoom(name, password, 'guest')

    return (
        <button
            className="createRoom"
            onClick={() => {
                if (myRoom) {
                    console.log('Cannot have more than one room!')
                } else if (!name.trim() || !password.trim()) {
                    console.log('Empty room!')
                } else {
                    dispatch(createRoom(newRoom.id))
                    socket.emit('createRoom', newRoom)
                    console.log('Room created')
                }
            }}
        >
            Create room!
        </button>
    )
}
