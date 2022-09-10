import React from "react";
import styles from "../../styles/component/molecules/slider.css"
import Slide from "../atoms/slide";


const slider = ({blocs}) => {
    let hoverDiv;
    let count = -1;
    let selected = 0;


    const moveHover = (index) => {
        hoverDiv.style.transform = `translateX(${448 * index}px)`
    }


    const backToSelected = () => {
        hoverDiv.style.transform = `translateX(${448 * selected}px)`
    }


    const setSelected = (index) => {
        selected = index
    }


    React.useEffect(()=>{
        hoverDiv = document.querySelector(`.${styles.hoverbg}`)
    },[])
    
    
    return (
    
        <div className={styles.sliderContainer}>
            <div className={styles.slider}>
                {
                    blocs.map((bloc)=>{
                        count++
                        return  <Slide obj={bloc} hoverFunction={moveHover} unhoveredFunction={backToSelected} setSelected={setSelected} count={count} key={count} />
                    })
                }
                <div className={styles.hoverbg}>
                </div>
            </div>
        </div>

    
    )
}

export default slider