
import useNextMovesInclude from './Logic/Next moves/Nextmoves include'
import useMovePiece from './Logic/Move piece/Move piece'
import { useDispatch } from 'react-redux'

export default function useStartFollowing(event, x, y){

    const startingX = event.clientX
    const startingY = event.clientY
    const target = event.target

    target.style.transition = "none"
    target.style.zIndex = "3"


    const useFollow = (event) => {
        target.style.left = `${x * 60 + event.x - startingX}px`
        target.style.top = `${y * 60 + event.y - startingY}px`
    }

    const useUnFollow = (event) => {

        let newX = x + Math.round((event.x - startingX) / 60)
        let newY = y + Math.round((event.y - startingY) / 60)

        // const nextMovesIncludeCell = useNextMovesInclude([newX, newY])
        // const movePiece = useMovePiece(newX, newY)
        // const movePiece = useMovePiece(newX, newY)

        // if (nextMovesIncludeCell){
        //     movePiece()
        // }

        target.style.transition = "170ms"
        target.style.zIndex = "2"

        target.style.top = `${y * 60}px`
        target.style.left = `${x * 60}px`

        window.removeEventListener("mousemove", useFollow)
        window.removeEventListener("mousemove", useUnFollow)
    }

    window.addEventListener("mousemove", useFollow)
    window.addEventListener("mouseup", useUnFollow)
}