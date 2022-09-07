import {color1, color2} from "./Cells";
import handleCellClick from "./handleCellClick";

export default function Cell({x, y}){

    const styles = {
        background: (x+y) % 2 ? color2: color1
    }

    return (
       <div
            className={"cell"}
            style={styles}
            onClick={() => handleCellClick(x,y)}>
       </div>
    )
}