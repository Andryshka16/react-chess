import restart from "./Restart game";

export default function Button(){
    return <button
        className={"reset"}
        onClick={restart}
    >
        Restart
    </button>
}