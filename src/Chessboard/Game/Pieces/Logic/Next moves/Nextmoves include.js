import { useSelector } from 'react-redux'


export default function useNextMovesInclude([x, y]) {

    const {nextMoves} = useSelector(store => store.chess)
    
    return nextMoves.map(i => i.toString())
        .includes([x,y].toString())
}
