import { type SchemaTypeDefinition } from 'sanity'
import items from "../items"
import review from "../review"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [items, review],
}
