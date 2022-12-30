import { useDispatch } from 'react-redux'
import { movePiece } from '../../features/chess/chessSlice'

export default function useStartDragging(nextMovesArray, x, y) {
	const dispatch = useDispatch()

	return (event) => {
		const startingX = event.clientX
		const startingY = event.clientY
		const target = event.target

		target.style.transition = 'none'
		target.style.zIndex = '3'

		const follow = (event) => {
			target.style.left = `${x * 80 + event.x - startingX}px`
			target.style.top = `${y * 80 + event.y - startingY}px`
		}
		const unFollow = (event) => {
			let newX = x + Math.round((event.x - startingX) / 80)
			let newY = y + Math.round((event.y - startingY) / 80)

			if (
				nextMovesArray
					.map((i) => i.toString())
					.includes([newX, newY].toString())
			) {
				dispatch(movePiece([newX, newY]))
			} else {
				target.style.transition = '170ms'
				target.style.top = `${y * 80}px`
				target.style.left = `${x * 80}px`
			}

			window.removeEventListener('mousemove', follow)
			window.removeEventListener('mouseup', unFollow)
		}

		window.addEventListener('mousemove', follow)
		window.addEventListener('mouseup', unFollow)
	}
}
