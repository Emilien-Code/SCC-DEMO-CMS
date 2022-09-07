import { FcIdea } from "react-icons/fc"
export default {
  name: 'steps',
  type: 'object',
  icon : FcIdea,
  fields: [
    {
      title: "Nom",
      type: "string",
      name:  "name",
      readOnly: true,
      hidden : true
    },
    {
      name: 'steps',
      type: 'array',
      title: 'Steps',
      of: [{
        type : "step",
      }]
    }
  ],
  initialValue: {
    name: "Steps"
  },
  preview : {
    select : {
      title: "name",
      media : ""
    }
  }
}