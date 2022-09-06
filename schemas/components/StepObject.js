import select from "../../components/stepImgSelect";

export default {
    name: 'step',
    type: 'object',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Titre',
      },{
        name: 'paragraph',
        type: 'string',
        title: 'Paragraphe',
      },{
        name: 'link',
        type: 'string',
        title: 'Lien (optionnel)',
      },{
        name: 'img',
        type: 'string',
        title: 'Image',
        inputComponent : select
      },
    ]
  }