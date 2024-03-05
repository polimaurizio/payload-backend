import { Block } from "payload/types";

const ImageBlock: Block = {
  slug: "imageBlock",
  fields: [
    {
      name: "media",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export default ImageBlock;
