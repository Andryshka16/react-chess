import { createSlice } from '@reduxjs/toolkit'
import gameField from './Gamefield'

import { current } from '@reduxjs/toolkit'

const turns = {
	b: 'w',
	w: 'b',
}

const initialState = {
	gameField,
	turn: 'w',
	colors: ['rgb(255,195,151)', 'rgb(39,39,39)'],
	selected: null,
	nextMoves: [],
	check: null,
	previousMove: [],
	castlingMoved: [],
	promoted: null,
	coverMoves: [],
	enpassing: null,
}

const chessSlice = createSlice({
	name: 'chess',
	initialState,
	reducers: {
		clearNextMoves: (state) => {
			state.nextMoves = []
		},
		setNextMoves: (state, { payload }) => {
			state.nextMoves = payload
		},
		setCheck: (state, { payload }) => {
			state.check = payload
		},
		setTurn: (state, { payload }) => {
			state.turn = payload
		},
		setSelected: (state, { payload }) => {
			state.selected = payload
		},
		setFollowing: (state, { payload }) => {
			state.followingPiece = payload
		},
		setPromoted: (state, { payload }) => {
			if (!payload) {
				const { x1, y1, name} = state.promoted
				state.gameField[y1][x1] = name
				state.promoted = payload
				state.turn = turns[state.turn]
			} else if (payload.length > 1) {
				state.promoted = payload
			} else {
				const { x2, y2 } = state.promoted
				state.gameField[y2][x2] = payload.name
				state.promoted = null
			}
		},
		setCoverMoves: (state, { payload }) => {
			state.coverMoves = payload
		},
		movePiece: (state, { payload }) => {
			const [x2, y2] = payload
			const { x, y, name } = state.selected
			const [color, piece] = name

			if (piece === 'K' && Math.abs(x2 - x) > 1) {
				const k = x2 > x ? 1 : -1
				state.gameField[y][4 + k] = color + 'R'
				state.gameField[y][4 + 2 * k] = color + 'K'
				state.gameField[y][4] = '0'
				state.gameField[y][k > 0 ? 7 : 0] = '0'
			} else if (
				piece === 'P' &&
				x !== x2 &&
				state.gameField[y2][x2] === '0'
			) {
				state.gameField[y][x2] = '0'
				state.gameField[y2][x2] = name
				state.gameField[y][x] = '0'
			}

			if (piece === 'P' && (y2 === 7 || y2 === 0)) {
				state.promoted = { x1:x, y1:y, x2, y2, name }
				state.gameField[y][x] = '0'
			} else {
				state.gameField[y2][x2] = name
				state.gameField[y][x] = '0'
			}

			if (
				piece === 'R' &&
				(x === 0 || x === 7) &&
				!state.castlingMoved.includes(x + name)
			) {
				state.castlingMoved.push(x + name)
			} else if (
				piece === 'K' &&
				x === 4 &&
				!state.castlingMoved.includes(name)
			) {
				state.castlingMoved.push(name)
			}

			state.enPassing =
				name[1] === 'P' && Math.abs(y2 - y) === 2 ? { x2, y2 } : null

			state.turn = turns[state.turn]
			state.selected = null
			state.coverMoves = []
			state.nextMoves = []
		},
	},
})

export default chessSlice.reducer

export const {
	clearNextMoves,
	setNextMoves,
	setCheck,
	setTurn,
	setSelected,
	setFollowing,
	setCoverMoves,
	movePiece,
	castle,
	setPromoted,
} = chessSlice.actions
