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
import Top from "../atoms/topBar"

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
            <Top next={false} closeClicked={closeClicked}/>

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