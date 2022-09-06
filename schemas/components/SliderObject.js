import radio from "../../components/selectDisplaySliderArrow";

export default {
    name: 'Slider',
    type: 'object',
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
    }
    
  }