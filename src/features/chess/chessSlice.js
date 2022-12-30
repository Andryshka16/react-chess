import { createSlice } from '@reduxjs/toolkit'
import gameField from './Gamefield'

import reducers from './reducers'

const initialState = {
	gameField,
	turn: 'w',
	turns: { b: 'w', w: 'b' },
	colors: ['rgb(255,195,151)', 'rgb(39,39,39)'],
	selected: null,
	check: null,
	promoted: null,
	enpassing: null,
	lastMoves: [],
	nextMoves: [],
	castlingMoved: [],
	coverMoves: [],
}

const chessSlice = createSlice({
	name: 'chess',
	initialState,
	reducers,
})

export default chessSlice.reducer

export const {
	setNextMoves,
	setCheck,
	setSelected,
	setCoverMoves,
	movePiece,
	setPromoted,
} = chessSlice.actions
