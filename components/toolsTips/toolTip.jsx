import React from "react";
import { Card, Dialog, Box, Text } from "@sanity/ui"
const indication = React.forwardRef((props, ref)=>{
    
    const [open, setOpen] = React.useState(false)
    const onClose = React.useCallback(() => setOpen(false), [])
    const onOpen = React.useCallback(() => setOpen(true), [])

    // const { 
    //     type,         // Schema information
    //     value,        // Current field value
    //     readOnly,     // Boolean if field is not editable
    //     placeholder,  // Placeholder text from the schema
    //     markers,      // Markers including validation rules
    //     presence,     // Presence information for collaborative avatars
    //     onFocus,      // Method to handle focus state
    //     onBlur,       // Method to handle blur state  
    //     onChange
    // } = props


    return(
        <>
            <Card padding={4} style={{textAlign: 'center'}}>
            <button onClick={onOpen}>
                {/* <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="13.5" cy="13.5" r="12.5" stroke="black" stroke-width="2"/>
                </svg> */}i
            </button>
            </Card>
        
        {
            open && (
            <Dialog
                header="Modifier les champs"
                id="dialog-example"
                onClose={onClose}
                zOffset={1000}
            >
                <Box padding={4}>
                    <Text>Vous pouvez modifier les champs ici</Text>
                </Box>
            </Dialog>
            )
        }
      </>
    )
})

export default indication