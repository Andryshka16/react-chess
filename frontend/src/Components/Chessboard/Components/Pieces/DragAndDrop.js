import { useDispatch, useSelector } from 'react-redux'
import { movePiece } from '../../../../features/chess/chessSlice'

export default function useStartDragging(nextMovesArray, x, y) {
    const dispatch = useDispatch()
    const { id, initialized } = useSelector((store) => store.thisRoom)

    return (event) => {
        const startingX = event.clientX
        const startingY = event.clientY
        const target = event.target

        target.style.transition = 'none'
        target.style.zIndex = '3'

        const follow = (event) => {
            target.style.left = `${x * 80 + event.x - startingX}px`
            target.style.top = `${(initialized ? y : 7 - y) * 80 + event.y - startingY}px`
        }
        const unFollow = (event) => {
            let newX = x + Math.round((event.x - startingX) / 80)
            let newY = y + Math.round((event.y - startingY) / 80) * (initialized ? 1 : -1)

            if (nextMovesArray.map((i) => i.toString()).includes([newX, newY].toString())) {
                dispatch(movePiece([newX, newY, id]))
            } else {
                target.style.transition = '170ms'
                target.style.top = `${(initialized ? y : 7 - y) * 80}px`
                target.style.left = `${x * 80}px`
            }

            window.removeEventListener('mousemove', follow)
            window.removeEventListener('mouseup', unFollow)
        }

        window.addEventListener('mousemove', follow)
        window.addEventListener('mouseup', unFollow)
    }
}
