import radio from "../../components/selectDisplayHeader"
export default {
    name: 'header',
    type: 'object',
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
        inputComponent : radio  
      }
    ],
    initialValue: {
      name: "Header"
    }
  }