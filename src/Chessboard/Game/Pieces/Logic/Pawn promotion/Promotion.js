import {useContext} from "react";
import PromotionPiece from "./Promotion piece";
import getChoices from "./Promotion choices";
import {PromotedContext} from "./Promotion context";

export let promoted, setPromoted

export default function Promotion(){

    [promoted, setPromoted] = useContext(PromotedContext)

    if (!promoted) return

    const [x, y] = promoted
    const choices = getChoices([x, y])

    const styles = {
        left: `${(x < 7? x : x - 1) * 60}px`,
        top: `${(y < 7? y: y - 1) * 60}px`
    }

    return (
        <div id={"promotion"}
             style={styles}>
            {choices.map((piece, id) =>
                <PromotionPiece
                    key={piece}
                    name={piece}
                    index={id}/>
            )}
        </div>
    )
}