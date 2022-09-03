import {useContext} from "react";
import PromotionPiece from "./Promotion piece";
import {PromotedContext} from "./Promotion context";

export let promoted, setPromoted

function getChoices([x, y]){
    if (y === 0){
        if (x < 7) return ["Q", "N", "B", "R"]
        else return ["N", "Q", "R", "B"]
    }
    else if (y === 7){
        if (x < 7) return ["B", "R", "Q", "N"]
        else return ["R", "B", "N", "Q"]
    }
}

export default function Promotion(){

    [promoted, setPromoted] = useContext(PromotedContext)

    if (!promoted) return

    const [x, y] = promoted

    const p = {
        width: x < 7? x : x - 1,
        height: y < 7? y: y - 1,
        choices: getChoices([x, y])
    }

    const {width, height, choices} = p

    const styles = {
        top: `${height*60}px`,
        left: `${width*60}px`
    }

    return (
        <div id={"promotion"}
             style={styles}>
            {choices.map((piece, id) => <PromotionPiece
                key={piece}
                name={piece}
                index={id}/>
            )}

        </div>
    )
}