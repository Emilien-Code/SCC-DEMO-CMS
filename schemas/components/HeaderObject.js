import radio from "../../components/inputs/selectDisplayHeader"
import headerTemplate from "../../components/Containers/HeaderContainer"
export default {
    name: 'header',
    type: 'object',
    inputComponent : headerTemplate,    
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'name',
        readOnly: true,
        hidden : true
      },
      {
        name: 'display',
        type: 'string',
        title: 'Affichage',
      }
    ],
    initialValue: {
      name: "Header"
    }
  }