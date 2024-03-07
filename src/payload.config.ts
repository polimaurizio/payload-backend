import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb' // database-adapter-import
import { webpackBundler } from '@payloadcms/bundler-webpack' // bundler-import
import { slateEditor } from '@payloadcms/richtext-slate' // editor-import
import { buildConfig } from 'payload/config'
import payload from 'payload'

import Users from './collections/Users'
import Pages from './collections/Pages'
import Media from './collections/Media'
import Nav from './globals/Nav'
import Footer from './globals/Footer'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(), // bundler-config
  },
  editor: slateEditor({}), // editor-config
  collections: [Pages, Media ,Users],
  globals: [Nav, Footer],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  // database-adapter-config-start
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),

  cors: process.env.CORS_PERMISSION?.split(',') ?? [],
  endpoints: [
    {
      root: true,
      method: "get",
      path: "/api/pages-pages/:slug",
      handler: async (req, res) => {
        const slug = req.params.slug;

        const response = await payload.find({
          collection: "pages",
          where: {
            and: [
              {
                slug: { like: slug }
              },
              {
                _status: { equals: 'published'}
              }
            ]
          }
        })
        res.status(200).json(response);
      },
    },
    {
      root: true,
      method: "get",
      path: "/api/globals-data/footer",
      handler: async (req, res) => {
        const response = await payload.findGlobal({
          slug: "footer",
        })
        res.status(200).json(response);
      },
    },
  ],
})
