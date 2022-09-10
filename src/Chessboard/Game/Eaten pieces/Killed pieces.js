import EatenPiece from "./EatenPiece";

export default function Pieces({arr}){

    if (!arr.length) return

    const styles = {
        height: `${60 + Math.floor((arr.length-1) / 9) * 50}px`,
    }

    return (
        <div className={"eaten"} style={styles}>
            {arr.map((n, id) =>
                <EatenPiece
                    name={n}
                    index={id}
                    key={"e"+ n + id}
                />
            )}
        </div>
    )
}