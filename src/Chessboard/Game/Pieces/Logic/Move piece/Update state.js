import checkSituation from "./Related with king/Check situation";

export default async function updateState(func, params){
    await func(params)
    checkSituation()
}