import { Block } from "payload/types";

const LinksBlock: Block = {
  slug: "linksBlock",
  interfaceName: "LinksBlockType",
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "btnLabel",
          type: "text",
          required: true,
        },
        {
          name: "reference",
          type: "relationship",
          relationTo: ["pages"],
          required: true,
        },
      ],
    },
  ],
};

export default LinksBlock;
