import Cell from "./cell";

export default function Cells(){

    return (
        Array.from({length: 64}, (_,i)=>
            <Cell
                x={i % 8}
                y={Math.floor(i/8)}
                key={i}/>
        )
    )
}