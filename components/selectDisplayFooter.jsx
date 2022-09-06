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
            checked={value === 'inline'}
            name="displayInline"
            onChange={handleChange}
            value="inline"
        />
        <label htmlFor="displayInline">En ligne</label> <br />
        <Radio
            checked={value === 'column'}
            name="displayColumn"
            onChange={handleChange}
            value="column"
        />
        <label htmlFor="displayColumn">En colonne</label> <br />


      </FormField>
    )
})

export default select