import radio from '../../components/selectHeroDisplay'
export default {
    name: 'hero',
    type: 'object',
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
  }