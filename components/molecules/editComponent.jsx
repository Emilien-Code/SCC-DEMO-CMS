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
import ModuleConfig from "./moduleConfig"
import styles from "../../styles/component/molecules/addComponent.css"
import PatchEvent, {set, unset} from '@sanity/form-builder/PatchEvent'

const addComponent = ({ close })=>{

    let [isNext, setNext] = React.useState(false);
    
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

    
    const validate = () => {
        if(!isNext){
            setNext(true)
            //Send the selected bloc's data
        }else{
            //tell to the parent the adedcomponent 
        }
    }

    const closeClicked = () => {
        close(false)
    }
    const back = () => {
        setNext(false)
    }


    return createPortal(
        <div className={styles.addItem}>
            <div className={styles.addItemForm}>
                <Top back={back} next={isNext} closeClicked={closeClicked}/>
                {
                    !isNext ? (<Slider blocs={blocs}/>) : (<ModuleConfig next={isNext}/>)
                }
                <div className={styles.buttonContainer}>
                    <button  onClick={validate} className={styles.valider}>
                        Valider
                    </button>
                </div>
            </div>
        </div>, document.body
    )
}

export default addComponent