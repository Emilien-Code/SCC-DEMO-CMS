export default {
    name: 'Slide',
    type: 'object',
    title: 'Slide',
    fields: [
      {
        name:'title',
        type:'string',
        title:'Titre'
      },
      {
        name:'paragraph',
        type:'string',
        title:'Paragraphe'
      },
      {
        name:'image',
        type:'image',
        title:'Image'
      },
      {
        type : "string",
        name: "altText",
        title: "Text Alternatif"
      }
    ],
  }