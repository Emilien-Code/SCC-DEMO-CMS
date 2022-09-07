import { FcPicture } from "react-icons/fc"

export default {
    name: 'Media',
    type: 'object',
    icon: FcPicture,
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
    preview : {
      select : {
        title: "title",
        media : ""
      }
    }
  }