import { useDispatch } from 'react-redux'
import { showAlert } from '../../../features/alert/alertSlice'

export default function PlayBtn({ passwordIsCorrect, clearInput }) {
    const dispatch = useDispatch()

    return (
        <button
            className="btn play-btn"
            onClick={() => {
                clearInput()
                if (passwordIsCorrect) {
                    dispatch(showAlert('Success!'))
                } else {
                    dispatch(showAlert('Wrong password'))
                }
            }}
        >
            Play
        </button>
    )
}
