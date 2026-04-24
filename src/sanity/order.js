const orderSchema = {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'address', title: 'Address', type: 'text' },
    {
      name: 'cartItems',
      title: 'Cart Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'price', type: 'number' },
            { name: 'quantity', type: 'number' },
            { name: 'image', title: 'Product Image', type: 'image', options: { hotspot: true } },
          ]
        }
      ]
    },
    {
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Processing', value: 'processing' },
          { title: 'Shipped', value: 'shipped' },
          { title: 'Delivered', value: 'delivered' },
          { title: 'Cancelled', value: 'cancelled' }
        ],
        layout: 'dropdown'
      },
      initialValue: 'pending'
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      options: { dateFormat: 'YYYY-MM-DD' },
      initialValue: (new Date()).toISOString()
    }
  ]
}

export default orderSchema
