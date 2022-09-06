import selectDisplayFooter from "../../components/selectDisplayFooter"
export default {
    name: 'footer',
    type: 'object',
    fields: [
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