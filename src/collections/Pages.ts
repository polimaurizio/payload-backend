import { CollectionConfig } from 'payload/types'

const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'slug',
  },
  fields: [
   {
    name: 'slug',
    type: 'text',
    required: true,
   }
  ],
}

export default Pages;
