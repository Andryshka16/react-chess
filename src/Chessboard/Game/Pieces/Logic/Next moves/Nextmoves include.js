import { useSelector } from 'react-redux'


export default function useNextMovesInclude() {

    const {nextMoves} = useSelector(store => store.chess)
    
    return ([x,y]) => nextMoves.map(i => i.toString())
        .includes([x,y].toString())
}
