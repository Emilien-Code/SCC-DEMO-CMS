import radio from "../../components/selectDisplaySliderArrow";
import { FcFilm } from "react-icons/fc"


export default {
    name: 'Slider',
    type: 'object',
    icon: FcFilm,
    fields: [
      {
        title: "Nom",
        type: "string",
        name:  "name",
        readOnly : true,
        hidden : true
      },
      {
        name: 'slides',
        type: 'array',
        title: 'Slides',
        of: [{
          type : "Slide",
        }]
      },{
        name: 'display',
        type: 'string',
        title: 'Position des flèches',
        inputComponent : radio
      },
    ],
    initialValue: {
      name: "Slider"
    },
    preview : {
      select : {
        title: "name",
        media : ""
      }
    }
    
  }