import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPromoted } from '../../../../../features/chess/chessSlice'

export default function PromotionPiece({ index, name }) {
    const dispatch = useDispatch()
    const { turn, turns } = useSelector((store) => store.chess)
    const { id, initialized } = useSelector((store) => store.thisRoom)

    let scales = {
        Q: 0.85,
        B: 0.8
    }

    let marginTop = {
        Q: '3px',
        R: '-2px',
        N: '-2px'
    }

    let scale = scales[name] || 0.7

    const styles = {
        top: `${Math.floor(index / 2) * 80}px`,
        left: `${(index % 2) * 80}px`,
        transform: `scale(${scale})`,
        rotate: (initialized ? 0 : 180) + 'deg',
        marginTop: marginTop[name],
    }

    function handleMouseOver(event) {
        event.target.style.transform = `scale(${scale * 1.2})`
    }

    function handleMouseOut(event) {
        event.target.style.transform = `scale(${scale})`
    }

    function handleMouseClick() {
        dispatch(setPromoted({ name: turns[turn] + name, id }))
    }

    return (
        <img
            src={`./images/${turns[turn] + name}.png`}
            alt={'failed'}
            className={'piece'}
            style={styles}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleMouseClick}
        ></img>
    )
}
