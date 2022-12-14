import React from "react";
import { useSelector } from 'react-redux';


export default function Target({x,y}){

    const [color1, color2] = useSelector(store => store.chess.colors)
    
    const styles = {
        top: `${y * 60}px`,
        left: `${x * 60}px`,
    }

    return (
        <>
            <div
                className={"rectangle"}
                style={styles}>
            </div>

            <div
                className={"circle"}
                style={{
                    ...styles,
                    background: (y+x) % 2 ? color2: color1}}>
            </div>
        </>
    )
}