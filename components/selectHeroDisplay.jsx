import React from "react";
import { useEffect } from "react";
import { FormField } from "@sanity/base/components"
import { Select }from '@sanity/ui'
import { Radio }from '@sanity/ui'
import { useId } from "@reach/auto-id" // hook to generate unique IDs
import PatchEvent, {set, unset} from '@sanity/form-builder/PatchEvent'


const select = React.forwardRef((props, ref)=>{

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
        <FormField
            description={type.description}  // Creates description from schema
            title={type.title}              // Creates label from schema title
            __unstable_markers={markers}    // Handles all markers including validation
            __unstable_presence={presence}  // Handles presence avatars
            inputId={inputId} 
        >
        <Radio
            checked={value === 'img-left'}
            name="img-left"
            id="img-left"
            onChange={handleChange}
            value="img-left"
        />
        <label htmlFor="img-left">Image à gauche</label> <br />
        <Radio
            checked={value === 'img-right'}
            name="img-right"
            id="img-right"
            onChange={handleChange}
            value="img-right"
        />
        <label htmlFor="img-right">Image à droite</label> <br />
        <Radio
            checked={value === 'no-img'}
            name="no-img"
            id="no-img"
            onChange={handleChange}
            value="no-img"
        />
        <label htmlFor="no-img">Sans image</label> <br />

      </FormField>
    )
})

export default select