import EatenPiece from "./EatenPiece";

export default function Pieces({arr}){

    if (!arr.length) return

    const pieces = arr.filter((elm, index) => arr.indexOf(elm) === index)

    const styles = {width: `${pieces.length * 80}px`}

    return (
        <div className={"eaten"}>
            <div className={"eatenPieces"} style={styles}>
                {pieces.map((n, id) =>
                    <EatenPiece
                        name={n}
                        index={id}
                        count={arr.filter(x => x===n).length}
                        key={"e"+ n + id}
                    />
                )}
            </div>
        </div>
    )
}