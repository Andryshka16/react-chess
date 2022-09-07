import React from "react";

export default function Dot({x,y}) {
    const styles = {
        top: `${y * 60}px`,
        left: `${x * 60}px`
    }
    return (
        <div
            className={"dot"}
            style={styles}>
        </div>
    )
}