import React from "react";
import { createPortal } from "react-dom";
import styles from "../../styles/component/molecules/module.css"

const config = (next) => {
    if(next){
        return (
            <>
                
            </>
        )
    }
    return createPortal (
        <>

        </>
    )

}

