import radio from '../../components/inputs/selectHeroDisplay'
import { FcCompactCamera } from "react-icons/fc"

export default {
    name: 'hero',
    type: 'object',
    icon : FcCompactCamera,
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Titre',
      },{
        name: 'primaryParagraph',
        type: 'string',
        title: 'Paragraphe principal',
      },{
        name: 'secondaryParagraph',
        type: 'string',
        title: 'Paragraphe secondaire'
      },{
        type:'string',
        name:'firstButton',
        title:'Boutton 1',
      },{
        type: 'string',
        name: 'seccondButton',
        title: 'Boutton 2',
      },{
        type : 'image',
        name: 'image',
        title: 'Image'
      },{
        type : 'string',
        name: 'altText',
        title: 'Text alternatif'
      },{
        type: 'string',
        name: 'display',
        title: 'Affichage',
        inputComponent : radio
      }
    ],
    preview : {
      select : {
        title: "title",
        media : ""
      }
    }
    
  }