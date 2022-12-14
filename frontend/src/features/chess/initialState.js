import FenToConverter from './fenConverter'

// const gameField = [
//     ['0', '0', '0', '0', '0', '0', '0', '0'],
//     ['bK', '0', '0', '0', '0', '0', '0', '0'],
//     ['0', '0', '0', '0', '0', '0', '0', '0'],
//     ['0', '0', '0', '0', '0', '0', '0', '0'],
//     ['0', '0', 'wR', '0', '0', '0', '0', '0'],
//     ['0', '0', '0', '0', '0', '0', '0', '0'],
//     ['0', '0', '0', '0', '0', '0', '0', '0'],
//     ['0', 'wQ', '0', '0', 'wK', '0', '0', '0']
// ]
// const gameField = FenToConverter('k7/2Q1p3/8/3P4/8/5B2/8/K7')

const gameField = [
    ['bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR'],
    ['bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP'],
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP'],
    ['wR', 'wN', 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR']
]


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
    draw: false,
    mate: false,
    online: false
}

export default initialState
