import React from 'react'
import { useSelector } from 'react-redux'

export default function CheckIndicator() {
    const { check } = useSelector((store) => store.chess)
    const { initialized } = useSelector((store) => store.thisRoom)

    if (!check) return

    const [x, y] = check

    const styles = {
        left: `${(initialized ? x : 7 - x) * 80}px`,
        top: `${(initialized ? y : 7 - y) * 80}px`
    }

    return <div style={styles} className={'check'}></div>
}
