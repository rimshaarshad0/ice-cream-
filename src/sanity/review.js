const reviewSchema = {
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Name' },
    { name: 'rating', type: 'number', title: 'Rating' },
    { name: 'message', type: 'text', title: 'Message' },
  ],
}

export default reviewSchema;