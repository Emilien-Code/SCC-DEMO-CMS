import { array } from "prop-types";
import {FcDocument } from "react-icons/fc"

export default {
    name : "landing",
    title: "Landing",
    type: "document",
    icon : FcDocument,
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
    },
}