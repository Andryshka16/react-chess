import checkSituation from "./Related with king/Check situation";

export default async function updateState(func, updates, castling= false){

    if (castling){
        await func(updates)
    }

    else {
        await func(piece => {
            return {
                ...piece,
               ...updates
            }
        })
    }
    checkSituation()
}