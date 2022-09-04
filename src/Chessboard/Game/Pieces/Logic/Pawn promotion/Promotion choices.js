export default function getChoices([x, y]){
    if (y === 0){
        if (x < 7) return ["Q", "N", "B", "R"]
        else return ["N", "Q", "R", "B"]
    }
    else if (y === 7){
        if (x < 7) return ["B", "R", "Q", "N"]
        else return ["R", "B", "N", "Q"]
    }
}