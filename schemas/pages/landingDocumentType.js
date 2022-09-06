import { array } from "prop-types";

export default {
    name : "landing",
    title: "Landing",
    type: "document",
    fields: [
        {
          name: "landing",
          title: "Landing page",
          type : 'string',
          readOnly : true
        },
        {
          name: "header",
          title: "Header",
          type: "header"
        },
        {
            name: "contenu",
            title: "Contenu",
            type: 'array',
            of: [
                {
                  type: "hero",
                },
                {
                  type: "Media",
                },
                {
                  type: "steps",
                },
                {
                  type: "Slider",
                },
            ]
        },
        {
          name: "footer",
          title: "Footer",
          type: "footer"
        },
    ],
    initialValue: {
        landing: "Landing page"
      }
}