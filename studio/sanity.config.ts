import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
// import { structure } from 'sanity/structure';


import items from '../src/sanity/items'
import order from "../src/sanity/order"
import reviews from "../src/sanity/review"
// or if you're using multiple types:
// import { schema } from './schemas' 

// Optional: move these to a separate env.ts file if you want
const projectId = 'fsl2lkyi'   
const dataset = 'production'
const apiVersion = '2023-10-01'   

export default defineConfig({
  name: 'default',
  title: 'Ice Cream Studio',

  projectId,
  dataset,
  basePath: '/studio',

  plugins: [
    deskTool(),
    visionTool(),
    // structure(),
  ],

  schema: {
    types: [items, order, reviews], 
  },
})
