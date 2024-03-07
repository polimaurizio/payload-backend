import { GlobalConfig } from 'payload/types'

const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'links',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'email',
          label: 'Email',
          type: 'text',
          required: true,
        }
      ]
    }
  ],
}

export default Footer