import React from "react";
import { useEffect } from "react";
import { FormField } from "@sanity/base/components"
import { Button, Select }from '@sanity/ui'
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



    console.log(props.compareValue);

    return (
        <>  
        <ul>
            {
                props.compareValue.map((comp)=>{
                    return (
                        <li key={comp._type}>
                            { comp._type }
                        </li>
                    )
                })
            }
        </ul>

        
            <FormField
                description={type.description}  // Creates description from schema
                title={type.title}              // Creates label from schema title
                __unstable_markers={markers}    // Handles all markers including validation
                __unstable_presence={presence}  // Handles presence avatars
                inputId={inputId} 
            >

            <Button
                id={inputId}                  // A unique ID for this input
                value={value || ''}                 // Current field value
                readOnly={readOnly}           // If "readOnly" is defined make this field read only
                placeholder={placeholder}     // If placeholder is defined, display placeholder text
                onFocus={onFocus}             // Handles focus events
                onBlur={onBlur}               // Handles blur events
                ref={ref}
                onChange={handleChange}
            >

                Ajouter


            </Button>

        </FormField>
        </>
    )
})

export default select