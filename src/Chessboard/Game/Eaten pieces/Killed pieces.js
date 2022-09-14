import EatenPiece from "./EatenPiece";

export default function Pieces({arr, color}){

    const pieces = arr.filter((elm, index) => arr.indexOf(elm) === index)

    const styles = {
        width: `${10 + pieces.length * 50}px`,
        left: `${465 - pieces.length * 50}px`
    }
    console.log(10 + pieces.length * 50)

    if (arr.length) return (
        <div className={"eaten"} style={styles}>
            {pieces.map((n, id) =>
                <EatenPiece
                    name={n}
                    index={id}
                    count={arr.filter(x => x === n).length}
                    key={"e"+ n + id}
                />
            )}
        </div>
    )
}