import kingCoordinates from './King coordinates'
import { useCheckForDraw, useCheckMate, useCheckForChecks } from './'
import { useDispatch, useSelector } from 'react-redux'
import { setCheck, setDraw, setMate } from '../../../../../../features/chess/chessSlice'

export default function useCheckSituation() {
    const { turn } = useSelector((store) => store.chess)
    const dispatch = useDispatch()

    const checkForChecks = useCheckForChecks()
    const checkForDraw = useCheckForDraw()
    const checkMate = useCheckMate()
    const king = kingCoordinates(turn + 'K')

    return () => {
        const checksArray = checkForChecks(king)
        const [check] = checksArray
        const amount = checksArray.length
        if (amount) {
            dispatch(setCheck(king))

            if (checkMate(king, check, amount)) {
                dispatch(setMate())
            }
        } else if (checkForDraw()) {
            dispatch(setDraw())
        } else {
            dispatch(setCheck(null))
        }
    }
}
