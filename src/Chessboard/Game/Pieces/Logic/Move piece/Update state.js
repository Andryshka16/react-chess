import checkSituation from "./Check situation";

export default async function updateState(setState, state){
    await setState(state)
    checkSituation()
}