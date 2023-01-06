import React from 'react'
import { useSelector } from 'react-redux'

export default function LastMove() {
    const { selected, lastMoves } = useSelector((store) => store.chess)
    const { initialized } = useSelector((store) => store.thisRoom)

    const { x1, y1 } = selected || {}

    const highLighted = [[x1, y1], ...lastMoves]

    const styles = (x, y) => ({
        top: `${(initialized ? y : 7 - y) * 80}px`,
        left: `${x * 80}px`
    })

    return highLighted.map(
        ([x, y]) =>
            !isNaN(x) &&
            !isNaN(y) && <div style={styles(x, y)} className="highlighted" key={`${x}${y}l`}></div>
    )
}
