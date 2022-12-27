
import { useSelector } from 'react-redux'
import useMovePiece from './Logic/Move piece/Move piece'

export default function useStartFollowing(nextMovesArray, x, y) {
    
    const movePiece = useMovePiece()

    return (event) => {
        
        const startingX = event.clientX
        const startingY = event.clientY
        const target = event.target

        target.style.transition = "none"
        target.style.zIndex = "3"

        const follow = (event) => {
            target.style.left = `${x * 60 + event.x - startingX}px`
            target.style.top = `${y * 60 + event.y - startingY}px`
        }
        const unFollow = (event) => {

            let newX = x + Math.round((event.x - startingX) / 60)
            let newY = y + Math.round((event.y - startingY) / 60)

            if (nextMovesArray.map(i => i.toString())
                    .includes([newX, newY].toString())){
                movePiece(newX, newY)
            }
            else {
                target.style.transition = "170ms"
                target.style.top = `${y * 60}px`
                target.style.left = `${x * 60}px`
            }
            
            window.removeEventListener("mousemove", follow)
            window.removeEventListener("mouseup", unFollow)
        }

        window.addEventListener("mousemove", follow)
        window.addEventListener("mouseup", unFollow)
    }
}