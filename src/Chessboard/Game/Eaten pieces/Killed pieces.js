import EatenPiece from "./EatenPiece";

export default function Pieces({arr, dif}){

    const pieces = arr.filter((elm, index) => arr.indexOf(elm) === index)

    const styles = {
        width: `${10 + pieces.length * 50}px`,
    }

    if (arr.length) return (

        <div className={"eatenDif"}>
            {dif > 0 ? <div className={"dif"}>
                <p>+{dif}</p>:
            </div> : <p></p>}

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
        </div>

    )
}