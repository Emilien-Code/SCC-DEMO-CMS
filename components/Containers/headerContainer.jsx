import React from "react";
import { useEffect } from "react";
import { FormField } from "@sanity/base/components"
import { Select }from '@sanity/ui'
import { useId } from "@reach/auto-id" // hook to generate unique IDs
import PatchEvent, {set, unset} from '@sanity/form-builder/PatchEvent'
import styles from "../../styles/component/containers/headerContainer.css"
import Component from "../atoms/component";

const select = React.forwardRef((props, ref)=>{
    console.log(props)
    const { 
        type,         // Schema information
        value,        // Current field value
        readOnly,     // Boolean if field is not editable
        placeholder,  // Placeholder text from the schema
        markers,      // Markers including validation rules
        presence,     // Presence information for collaborative avatars
        onFocus,      // Method to handle focus state
        onBlur,       // Method to handle blur state  
        onChange
    } = props

    const inputId = useId()


    useEffect(()=>{
        console.log('changed')
    }, [ref])

    console.log(props)


    const handleChange = React.useCallback(
        // useCallback will help with performance
        (event) => {
            const inputValue = event.currentTarget.value // get current value
            let valObj = props.compareValue
            valObj.display = inputValue
            
            onChange(PatchEvent.from(inputValue ? set(valObj) : unset()))
        },
        [onChange]
        )
        
        console.log(value)
    return (
        <>
            <h2>Header</h2>

                <Component comp={props.compareValue}/>



                {/*
                  * These properties allows to connect thes jsx to Schemas data.
                  * It will probably be usefull when we will want to modify this component.
                  * 
                  * 
                  * 
                  * 
                  *   *   *   *  *  *   *   *   *   *   *   *   *   *
                
                <FormField
                    description={type.description}  // Creates description from schema    // Creates label from schema title
                    __unstable_markers={markers}    // Handles all markers including validation
                    __unstable_presence={presence}  // Handles presence avatars
                    inputId={inputId} 
                >

                <Select
                    id={inputId}                  // A unique ID for this input
                    value={value.display || ''}                 // Current field value
                    readOnly={readOnly}           // If "readOnly" is defined make this field read only
                    placeholder={placeholder}     // If placeholder is defined, display placeholder text
                    onFocus={onFocus}             // Handles focus events
                    onBlur={onBlur}               // Handles blur events
                    ref={ref}
                    onChange={handleChange}
                >
                    <option value={value.display}>
                        {value.display==="search" ? "Barre de recherche" : ""}
                        {value.display==="center" ? "Slogan centré" : ""}
                        {value.display==="left" ? "Slogan à gauche" : ""}
                        {value.display==="right" ? "Slogan à droite" : ""}
                    </option>
                    {value.display !=="search" && <option value="search">Barre de recherche</option>}
                    {value.display !=="center" && <option value="center">Slogan centré</option>}
                    {value.display !=="left" && <option value="left">Slogan à gauche</option>}
                    {value.display !=="right" && <option value="right">Slogan à droite</option>}


                </Select>

            </FormField> */}
        </>
    )
})

export default select