import React from "react";
import { useEffect } from "react";
import { FormField } from "@sanity/base/components"
import { useId } from "@reach/auto-id" // hook to generate unique IDs
import PatchEvent, {set, unset} from '@sanity/form-builder/PatchEvent'
import styles from "../../styles/component/containers/schemasArray.css"
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

    console.log()


    const handleChange = React.useCallback(
        // useCallback will help with performance
        (event) => {
          const inputValue = event.currentTarget.value // get current value
          // if the value exists, set the data, if not, unset the data
          onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()))
        },
        [onChange]
    )

    return (
        <>  
        <h2>Contenu</h2>
        <ul className={styles.componentsList}>
            {
                props.compareValue.map((comp)=>{
                    return (
                        <li key={comp._type}>
                            <div className={styles.drag}>
                                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 14C4 15.1 3.1 16 2 16C0.9 16 0 15.1 0 14C0 12.9 0.9 12 2 12C3.1 12 4 12.9 4 14ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4ZM8 6C6.9 6 6 6.9 6 8C6 9.1 6.9 10 8 10C9.1 10 10 9.1 10 8C10 6.9 9.1 6 8 6ZM8 12C6.9 12 6 12.9 6 14C6 15.1 6.9 16 8 16C9.1 16 10 15.1 10 14C10 12.9 9.1 12 8 12Z" fill="#101112"/>
                                </svg>
                            </div>
                            <Component comp={comp} isListe={true}/>
                        </li>
                    )
                })
            }
        </ul>
        
            <FormField
                description={type.description}  // Creates description from schema    // Creates label from schema title
                __unstable_markers={markers}    // Handles all markers including validation
                __unstable_presence={presence}  // Handles presence avatars
                inputId={inputId} 
            >

            <button
                className={styles.addComponentBtn}
                id={inputId}                  // A unique ID for this input
                value={value || ''}                 // Current field value
                readOnly={readOnly}           // If "readOnly" is defined make this field read only
                placeholder={placeholder}     // If placeholder is defined, display placeholder text
                onFocus={onFocus}             // Handles focus events
                onBlur={onBlur}               // Handles blur events
                ref={ref}
                onChange={handleChange}
            >
                <div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z" fill="#101112"/>
                    </svg>
                    Ajouter un module
                </div>
            </button>

        </FormField>
        </>
    )
})

export default select