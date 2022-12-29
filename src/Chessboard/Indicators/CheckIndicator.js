import React from 'react'
import { useSelector } from 'react-redux'

export default function CheckIndicator() {
	const { check } = useSelector((store) => store.chess)

	if (!check) return

	const [x, y] = check

	const styles = {
		left: `${x * 60}px`,
		top: `${y * 60}px`,
	}

	return <div style={styles} className={'check'}></div>
}
