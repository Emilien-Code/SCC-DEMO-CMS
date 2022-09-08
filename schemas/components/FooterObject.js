import { Dialog } from "@sanity/ui"
import selectDisplayFooter from "../../components/Inputs/selectDisplayFooter"
import toolTip from "../../components/toolsTips/toolTip"
export default {
    name: 'footer',
    type: 'object',
    fields: [
      {
        name: "dialog",
        type: 'boolean',

        inputComponent: toolTip
      },
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        readOnly: true,
        hidden: true
      },{
        name: 'display',
        type: 'string',
        title: 'Affichage',
        inputComponent : selectDisplayFooter  
      }
    ],
    initialValue: {
      name: "Footer"
    }
  }