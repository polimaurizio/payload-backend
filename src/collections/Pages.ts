import { text } from 'express'
import { CollectionConfig } from 'payload/types'

const Pages: CollectionConfig = {
  slug: 'pages',
  auth: true,
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
