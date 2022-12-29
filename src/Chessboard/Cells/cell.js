import { useSelector } from 'react-redux';
import useHandleCellClick from "./handleCellClick";

export default function Cell({x, y}){

    const [color1, color2] = useSelector(store => store.chess.colors)

    const handleCellClick = useHandleCellClick(x, y)

    const styles = {
        background: (x + y) % 2 ? color2: color1
    }

    return (
       <div
            className={"cell"}
            style={styles}
            onClick={handleCellClick}>
       </div>
    )
}