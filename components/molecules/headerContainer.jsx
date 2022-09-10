import React from "react";
import PatchEvent, {set, unset} from '@sanity/form-builder/PatchEvent'
import Component from "../atoms/component";

const select = React.forwardRef((props, ref)=>{


    /* This part will be usefull to update the component 
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



    const handleChange = React.useCallback(

        (event) => {
            const inputValue = event.currentTarget.value
            let valObj = props.compareValue
            valObj.display = inputValue
            
            onChange(PatchEvent.from(inputValue ? set(valObj) : unset()))
        },
        [onChange]
        )
    */


    return (
        <>
            <h2>Header</h2>
            <Component comp={props.compareValue}/>
        </>
    )
})

export default select