import { GlobalConfig } from 'payload/types'

const Nav: GlobalConfig = {
  slug: 'nav',
  label: 'Header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      required: true,
      maxRows: 8,
      fields: [
        {
          name: 'page',
          type: 'relationship',
          relationTo: 'pages',
          required: true,
        },
      ],
    },
  ],
}

export default Nav