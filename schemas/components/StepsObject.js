export default {
  name: 'steps',
  type: 'object',
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
  }
}