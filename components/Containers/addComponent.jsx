/**
 * Ajout d'un composant :
 * 
 * Ce composant permet de selectionner un composant. 
 * Il s'affiche quand on clique sur le boutton "+ Ajouter un module"
 * 
 * Pour les layouts il faudrait demander à Lucas les SVG des composants manquant ( Slider Hero Steps ) et mettre un texte de description.
 * 
 * @todo fill the blocs array.
 * @todo hover animation on "valider" and "X Fermer" buttons 
 * @todo the slidebar hasn't the model size
 */

import React from "react";
import { createPortal } from "react-dom";
import Component from "../atoms/component";
import Slide from "../atoms/slide";

import styles from "../../styles/component/containers/addComponent.css"

const addComponent = ({ close })=>{
    let count = -1;
    let selected = 0;
    let hoverDiv;

    const blocs = [{
        bloc_name: "Bloc image",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus adipiscing id gravida blandit egestas mattis malesuada.",
        nbVariantes : 3,
    }, {
        bloc_name: "Bloc image",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus adipiscing id gravida blandit egestas mattis malesuada.",
        nbVariantes : 3,
    }, {
        bloc_name: "Bloc image",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus adipiscing id gravida blandit egestas mattis malesuada.",
        nbVariantes : 3,
    }]

    React.useEffect(()=>{
        /**
         * Ici je selection la class hoverbg. 
         * 
         * @bug the class could change when sanity recompile the project. If it's happen, we will have to find an other solution. 
         * */
        hoverDiv = document.querySelector(".addComponent_hoverbg_2Ii0K")
    })


    const moveHover = (index) => {
        hoverDiv.style.transform = `translateX(${448 * index}px)`
    }
    const backToSelected = () => {
        hoverDiv.style.transform = `translateX(${448 * selected}px)`
    }
    const setSelected = (index) => {
        selected = index
    }

    const closeClicked = () => {
        close(false)
    }
    return createPortal(
        <div className={styles.addItem}>
            <div className={styles.addItemForm}>
                <div className={styles.top}>
                    <div className={styles.back}></div>
                    <div>Choix du composant</div>
                    <div className={styles.close}>
                        <button onClick={closeClicked} >
                            <svg width="82" height="21" viewBox="0 0 82 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.4141 16H29.1641V11.2812H34.0078V9.80469H29.1641V6.23438H34.4531V4.72656H27.4141V16ZM40.0938 16.1641C42.2656 16.1641 43.4375 14.9141 43.7188 13.7969L43.7344 13.7266L42.1016 13.7344L42.0703 13.7969C41.8672 14.2344 41.2188 14.7734 40.1328 14.7734C38.7344 14.7734 37.8438 13.8281 37.8125 12.2031H43.8281V11.6094C43.8281 9.0625 42.375 7.35156 40.0078 7.35156C37.6406 7.35156 36.1094 9.125 36.1094 11.7734V11.7812C36.1094 14.4688 37.6094 16.1641 40.0938 16.1641ZM40.0156 8.74219C41.1641 8.74219 42.0156 9.47656 42.1484 10.9922H37.8359C37.9844 9.53125 38.8594 8.74219 40.0156 8.74219ZM45.8438 16H47.5391V10.9297C47.5391 9.70312 48.4219 8.90625 49.7188 8.90625C50.0391 8.90625 50.3281 8.94531 50.6328 9.00781V7.44531C50.4609 7.40625 50.1641 7.36719 49.8906 7.36719C48.7578 7.36719 47.9688 7.89844 47.6641 8.79688H47.5391V7.51562H45.8438V16ZM52.375 16H54.0703V10.7891C54.0703 9.67969 54.8281 8.80469 55.8516 8.80469C56.8516 8.80469 57.4844 9.41406 57.4844 10.3828V16H59.1719V10.6328C59.1719 9.60938 59.8828 8.80469 60.9609 8.80469C62.0703 8.80469 62.6016 9.38281 62.6016 10.5547V16H64.2891V10.1484C64.2891 8.38281 63.2891 7.35156 61.5781 7.35156C60.3984 7.35156 59.4219 7.95312 58.9922 8.86719H58.8594C58.4844 7.95312 57.6641 7.35156 56.5078 7.35156C55.3984 7.35156 54.5703 7.89062 54.1953 8.82031H54.0703V7.51562H52.375V16ZM70.2188 16.1641C72.3906 16.1641 73.5625 14.9141 73.8438 13.7969L73.8594 13.7266L72.2266 13.7344L72.1953 13.7969C71.9922 14.2344 71.3438 14.7734 70.2578 14.7734C68.8594 14.7734 67.9688 13.8281 67.9375 12.2031H73.9531V11.6094C73.9531 9.0625 72.5 7.35156 70.1328 7.35156C67.7656 7.35156 66.2344 9.125 66.2344 11.7734V11.7812C66.2344 14.4688 67.7344 16.1641 70.2188 16.1641ZM70.1406 8.74219C71.2891 8.74219 72.1406 9.47656 72.2734 10.9922H67.9609C68.1094 9.53125 68.9844 8.74219 70.1406 8.74219ZM75.9688 16H77.6641V10.9297C77.6641 9.70312 78.5469 8.90625 79.8438 8.90625C80.1641 8.90625 80.4531 8.94531 80.7578 9.00781V7.44531C80.5859 7.40625 80.2891 7.36719 80.0156 7.36719C78.8828 7.36719 78.0938 7.89844 77.7891 8.79688H77.6641V7.51562H75.9688V16Z" fill="#101112"/>
                                <path d="M14 5.41L12.59 4L7 9.59L1.41 4L0 5.41L5.59 11L0 16.59L1.41 18L7 12.41L12.59 18L14 16.59L8.41 11L14 5.41Z" fill="#101112"/>
                            </svg>
                        </button>
                    </div>
                </div>
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
                <div className={styles.buttonContainer}>
                    <button className={styles.valider}>
                        Valider
                    </button>
                </div>
            </div>
        </div>, document.body
    )
}

export default addComponent