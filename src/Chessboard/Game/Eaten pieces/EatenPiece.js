export default function EatenPiece({name, index, count}){

    let scales = {
        "P": 0.6, "B": 0.8,
        "Q": 0.85, "K": 0.8,
    }

    let marginTop = {
        "P": "-6px", "Q": "px",
        "R": "-2px", "N": "-4px",
    }

    let scale = scales[name[1]] || 0.7

    let styles = {
        transform: `scale(${scale})`,
        left: `${index % 9 * 50}px`,
        marginTop: marginTop[name[1]],
    }

    return (
        <>
            <img
                src={`./images/${name}.png`}
                alt={"failed"}
                className={"figure"}
                style={styles}>
            </img>
            <h2
                className={"count"}
                style={{left: `${55 + index % 9 * 50}px`,}}
            >
                x{count}
            </h2>
        </>

    )
}