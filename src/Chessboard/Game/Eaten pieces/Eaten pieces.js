import {useState} from "react";
import Pieces from "./Killed pieces";

export let killed, setKilled

export default function EatenPieces({children}) {

    [killed, setKilled] = useState([])

    return (
        <>
            <Pieces arr={killed.filter(n => n[0] === "b")}/>
                {children}
            <Pieces arr={killed.filter(n => n[0] === "w")}/>
        </>
    )
}