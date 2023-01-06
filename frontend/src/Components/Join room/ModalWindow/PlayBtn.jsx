import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { socket } from '../../../App'
import { showAlert } from '../../../features/alert/alertSlice'
import { joinRoom } from '../../../features/myRoom/myRoomSlice'

export default function PlayBtn({
    passwordIsCorrect,
    closeModal,
    clearInput,
    id
}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const alert = (text) => dispatch(showAlert(text))

    return (
        <button
            className="btn play-btn"
            onClick={() => {
                clearInput()
                if (passwordIsCorrect) {
                    socket.emit('joinRoom', id)
                    closeModal()
                    dispatch(joinRoom(id))
                    navigate('/chess')
                    alert('Success!')
                } else {
                    alert('Wrong password')
                }
            }}
        >
            Play
        </button>
    )
}
