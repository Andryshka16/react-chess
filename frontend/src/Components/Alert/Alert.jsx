import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { hideAlert } from '../../features/alert/alertSlice'

export default function Alert() {
    const dispatch = useDispatch()
    const { show, text } = useSelector((store) => store.alert)
    setTimeout(() => dispatch(hideAlert()), 1500)

    return (
        <CSSTransition in={show} timeout={400} classNames='alert-div' unmountOnExit>
            <div className='alert'>
                <h2>{text}</h2>
            </div>
        </CSSTransition>
    )
}
