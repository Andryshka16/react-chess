import { movePiece, setPromoted } from './reducers/'

const reducers = {
	setNextMoves: (state, { payload }) => {
		state.nextMoves = payload
	},
	setCheck: (state, { payload }) => {
		state.check = payload
	},
	setSelected: (state, { payload }) => {
		state.selected = payload
	},
	setCoverMoves: (state, { payload }) => {
		state.coverMoves = payload
	},
	setPromoted,
	movePiece,
}

export default reducers
