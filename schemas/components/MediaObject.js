export default {
    name: 'Media',
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
      },/*{
        name: 'secondaryParagraph',
        type: 'video',
        title: 'Paragraphe secondaire'
      },*/{
        type : 'image',
        name: 'image',
        title: 'Image'
      },{
        type : "string",
        name: "altText",
        title: "Text Alternatif"
      }
    ],
  }