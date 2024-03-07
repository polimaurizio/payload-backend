import { CollectionConfig } from "payload/types";

import LinksBlock from "../blocks/Links";
import ImageBlock from "../blocks/ImageBlock";


const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    defaultColumns: ["title", "slug"],
    useAsTitle: "title",
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "slug",
          type: "text",
          required: true,
          admin: {
            description: "Titolo pagina in minuscolo e con - al posto degli spazi!"
          }
        },
      ],
    },
    {
      name: "layout",
      type: "blocks",
      minRows: 1,
      maxRows: 20,
      blocks: [LinksBlock, ImageBlock],
    },
  ],
};

export default Pages;
