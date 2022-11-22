import { createSlice } from '@reduxjs/toolkit';

const gameField = [
	['bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR'],
	['bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP'],
	['0', '0', '0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0', '0', '0'],
	['wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP'],
	['wR', 'wN', 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR'],
];

const initialState = {
    turn: "W",
    gameField,
}

const boardSlice = createSlice({
    name: "chessBoard",
    initialState,
    reducers: {
        restartGame: (state, action) => {
            state.gameField = gameField
        }
    }
})


export const { restartGame } = boardSlice.actions;

export default boardSlice.reducer