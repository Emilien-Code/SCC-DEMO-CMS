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
import Slider from "./slider";
import Top from "../atoms/topBar"

import styles from "../../styles/component/molecules/addComponent.css"
const addComponent = ({ close })=>{

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



    const closeClicked = () => {
        close(false)
    }


    return createPortal(
        <div className={styles.addItem}>
            <div className={styles.addItemForm}>
            <Top next={false} closeClicked={closeClicked}/>
            <Slider blocs={blocs}/>
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