import React, {useContext} from "react";
import {turn, turns} from "../Move piece/Move piece";
import {PromotedContext} from "./Promotion context";

export default function PromotionPiece({index, name}){

    const [promoted, setPromoted] = useContext(PromotedContext)

    let scales = {
        "Q": 0.85,
        "B": 0.8,
    }

    let marginTop = {
        "Q": "3px",
        "R": "-1px"
    }

    let scale = scales[name] || 0.7

    const styles = {
        top: `${Math.floor(index/2)*60}px`,
        left: `${index%2*60}px`,
        transform: `scale(${scale})`,
        marginTop: marginTop[name],
    }

    function handleMouseOver(event) {
        event.target.style.transform = `scale(${scale * 1.2})`
    }

    function handleMouseOut(event) {
        event.target.style.transform = `scale(${scale})`
    }
    function handleMouseClick() {
        setPromoted(false)
    }

    return (
        <img
            src={`./images/${turns[turn] + name}.png`}
            alt={"failed"}
            className={"figure"}
            style={styles}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleMouseClick}>
        </img>
    )
}