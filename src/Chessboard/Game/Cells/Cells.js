import Cell from "./cell";

export const color1 = "rgb(255,195,151)"
export const color2 = "rgb(39,39,39)"

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