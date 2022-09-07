import React, {useState} from "react";

export let check, setCheck

export default function CheckIndicator(){

    [check, setCheck] = useState(false)

    if (!check) return

    const [x, y] = check

    const styles = {
        left: `${x*60}px`,
        top: `${y*60}px`
    }

    return <div
        style={styles}
        className={"check"}>
    </div>

}