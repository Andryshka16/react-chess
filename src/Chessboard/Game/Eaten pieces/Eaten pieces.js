import {useState} from "react";
import Pieces from "./Killed pieces";

export let killed, setKilled

export default function EatenPieces({children}) {

    [killed, setKilled] = useState([])


    const value = {
        "P": 1,
        "B": 3,
        "N": 3,
        "R": 5,
        "Q": 9,
    }

    const white = killed.filter(n => n[0] === "w")
    const black = killed.filter(n => n[0] === "b")

    const whiteValue = white.map(i => value[i[1]]).reduce((a, b) => a + b, 0)
    const blackValue = black.map(i => value[i[1]]).reduce((a, b) => a + b, 0)

    return (
        <>
            <Pieces arr={killed.filter(n => n[0] === "w")}/>
                {children}
            <Pieces arr={killed.filter(n => n[0] === "b")}/>
        </>
    )
}