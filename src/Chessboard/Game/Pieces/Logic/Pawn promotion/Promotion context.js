import React, {createContext, useState} from "react";

export const PromotedContext = createContext(null)

export default function PromotionContext({children}){

    const [promoted, setPromoted] = useState(false)

    return (
        <PromotedContext.Provider value={[promoted, setPromoted]}>
            {children}
        </PromotedContext.Provider>
    )
}