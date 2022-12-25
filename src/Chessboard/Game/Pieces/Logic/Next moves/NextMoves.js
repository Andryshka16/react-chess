import useGetBishopMoves from "./Piece moves/Bishop";
import useGetRookMoves from "./Piece moves/Rook";
import useGetKnightMoves from "./Piece moves/Knight";
import useGetKingMoves from "./Piece moves/King";
import useGetPawnMoves from "./Piece moves/Pawn";
import useFilterMoves from "./Filtration";
import { useDispatch, useSelector } from 'react-redux';

export default function useGetNextMove([x, y]) {
    
    const { gameField } = useSelector(store => store.chess)

    let piece = gameField[y][x]

    const steps = {
        "K": useGetKingMoves(x, y),
        "N": useGetKnightMoves(x, y),
        "Q": [...useGetBishopMoves(x, y), ...useGetRookMoves(x, y)],
        "B": useGetBishopMoves(x, y),
        "R": useGetRookMoves(x, y),
        "P": useGetPawnMoves(x, y),
    }

    const filteredMoves = useFilterMoves(x, y, steps[piece[1]])
    
    return filteredMoves

    // return steps[piece[1]]
    
}

