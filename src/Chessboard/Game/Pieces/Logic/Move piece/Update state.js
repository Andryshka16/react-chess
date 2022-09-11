import checkSituation from "./Check situation";

export default async function updateState(func, params){
    await func(params)
    checkSituation()
}