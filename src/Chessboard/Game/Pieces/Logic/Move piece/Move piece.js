// import {clearField} from "../../../Indicators/ShowNextMoves";
// import togglePointerEvents from "../Pawn promotion/togglePointerEvents";
// import doCastling from "./Related with king/Castle king";
// import removePiece from "./Remove piece";
// import maybeCastlingPiecesMoved from "./Related with king/Mby castling pieces moved";
// import updateState from "./Update state";
// import {recentPieceCrd} from "../../piece";
// import {gameField} from "../../Gamefield";
// import {setPromoted} from "../Pawn promotion/Promotion";
import { useDispatch, useSelector } from 'react-redux';
import { clearNextMoves,setCheck, setTurn, movePiece, setSelected, castle } from '../../../../../features/chess/chessSlice';

export let turn = "w"

export const turns = {"w": "b", "b": "w"}

export let enPassing
export let castlingMoved = []
export let clearCastlingMoved = () => castlingMoved = []

export default function useMovePiece(){

    const dispatch = useDispatch()

    return (x2, y2) => {

        // enPassing = name === "P" &&
        //     Math.abs(y2 - y1) === 2 ?
        //         {x: x2, y: y2} : false

        // if (name === "P"  && (y2 === 7 || y2 === 0)){
        //     setPromoted([x2, y2])
        //     togglePointerEvents("none")
        // }

        // maybeCastlingPiecesMoved(color, name, x1)

        dispatch(movePiece([x2, y2]))

    }
}
