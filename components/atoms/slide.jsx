/**
 * I don't thik there is something todo here 
 */

import React from "react"
import styles from "../../styles/component/atoms/slide.css"



const component = ({ obj, count,  hoverFunction, unhoveredFunction, setSelected })=>{
    const hover = () => {
        hoverFunction(count)
    }
    const unHover = () =>{
        unhoveredFunction()
    }
    const select = () => {
        setSelected(count)
    } 
    return (
        <div className={styles.slide} onMouseOver={hover} onClick={select} onMouseLeave={unHover}>
            <div className={styles.top}>
                <h3>{ obj.bloc_name }</h3>
                <span>{ obj.nbVariantes } variantes</span>
            </div>
            <div className={styles.imgContainer}>
                <svg width="260" height="194" viewBox="0 0 260 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.6" y="0.6" width="258.8" height="192.8" fill="#F8F9FC"/>
                    <path d="M150 112.556V81.4444C150 79 148 77 145.556 77H114.444C112 77 110 79 110 81.4444V112.556C110 115 112 117 114.444 117H145.556C148 117 150 115 150 112.556ZM122.222 100.333L127.778 107.022L135.556 97L145.556 110.333H114.444L122.222 100.333Z" fill="#AFAFAF"/>
                    <rect x="0.6" y="0.6" width="258.8" height="192.8" stroke="#F0EEF0" strokeWidth="1.2"/>
                </svg>
            </div>
            <p>
                {obj.text}
            </p>
        </div>
    )
}

export default component