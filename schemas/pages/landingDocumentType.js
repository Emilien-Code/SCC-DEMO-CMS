import { array } from "prop-types";
import { FcDocument } from "react-icons/fc"
import schemasArray from "../../components/molecules/SchemasArray"
export default {
    name : "landing",
    title: "Landing",
    type: "document",
    icon : FcDocument,
    fields: [
        {
          name: "titre",
          title: "Titre",
          type : 'string',
        },
        {
          name: "description",
          title: "Description",
          type: "string"
        },
        {
          name: "header",
          title: "Header",
          type: "header"
        },
        {
            name: "contenu",
            title: "contenu",
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
            ],
          inputComponent : schemasArray    
        },
        {
          name: "footer",
          title: "Footer",
          type: "footer"
        },
    ],
    initialValue: {
        titre: "Accueil",
        contenu: "",
    },
}