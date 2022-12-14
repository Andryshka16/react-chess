import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { socket } from '../../../Socket'
import { showAlert } from '../../../features/alert/alertSlice'
import { connectTo } from '../../../features/thisRoom/thisRoomSlice'

export default function PlayBtn({ passwordIsCorrect, closeModal, clearInput, id }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const alert = (text) => dispatch(showAlert(text))

    return (
        <button
            className='btn play-btn'
            onClick={() => {
                clearInput()
                if (passwordIsCorrect) {
                    socket.emit('joinRoom', id)
                    socket.emit('removeRoom', id)
                    dispatch(connectTo(id))
                    navigate('/chess')
                    closeModal()
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
