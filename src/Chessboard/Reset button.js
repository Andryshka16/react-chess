// import restart from "./Restart game";

import { useDispatch } from 'react-redux'
import { restartGame } from '../features/chessBoard/boardSlice'

export default function Button() {
    
    const dispatch = useDispatch()

    function restart() { 
        dispatch(restartGame())
    }


    return <button
        className={"reset"}
        onClick={restart}
    >
        Restart
    </button>
}