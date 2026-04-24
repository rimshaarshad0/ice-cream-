'use client'
import React, { useState } from 'react'
import { useCart } from '@/context/CartContext'
import Navbar from '@/compnents/navbar'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { v4 as uuidv4 } from 'uuid'

export default function CheckoutPage() {
  const { cartItems } = useCart()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  })

  const [orderPlaced, setOrderPlaced] = useState(false)

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const handleChange = (e) => {
    console.log("Cart items being submitted:", cartItems)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
  e.preventDefault()

  if (cartItems.length === 0) return

  try {
    const cartItemsWithImages = await Promise.all(
  cartItems.map(async (item) => {
    let imageRefId = null

    if (item.imageUrl) {
      const response = await fetch(item.imageUrl)
      const blob = await response.blob()

      const uploadedAsset = await client.assets.upload('image', blob, {
        filename: `${item.title}.jpg`,
      })

      imageRefId = uploadedAsset._id
    }

    return {
      _key: uuidv4(),
      _type: 'object',
      title: item.title,
      price: item.price,
      quantity: item.quantity,
      image: imageRefId
        ? {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: imageRefId,
            },
          }
        : undefined,
    }
  })
)

const newOrder = {
  _type: 'order',
  name: formData.name,
  address: formData.address,
  createdAt: new Date().toISOString(),
  cartItems: cartItemsWithImages,
}

    await client.create(newOrder)

    setOrderPlaced(true)
  } catch (error) {
    console.error('Order failed to save:', error)
  }
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#c1a089] text-[#8B4513]">
      <Navbar />
      <div className="max-w-5xl mx-auto p-3 md:p-5">
        <h1 className="font_style text-[2rem] md:text-[3rem] tracking-wider font-extrabold mb-7 md:mb-10 text-center text-[#8B4513] mt-[-1rem] md:mt-0">Checkout</h1>

        {orderPlaced ? (
          <div className="text-center">
            <h2 className="text-[1.2rem] md:text-2xl font-bold text-green-600 mb-4">🎉 Order Placed Successfully!</h2>
            <p className="text-[1rem] md:text-lg">Thank you for your purchase, {formData.name}!</p>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="bg-[#faeee6] p-3 md:p-6 rounded-lg shadow space-y-4">
              <h2 className="text-2xl font-semibold mb-2">Customer Info</h2>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-[#8B4513] px-2 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] mb-4"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-[#8B4513] px-2 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] mb-4"
              />

              <textarea
                name="address"
                placeholder="Shipping Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full border border-[#8B4513] px-2 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] mb-1 md:mb-4"
              />

              <button
                type="submit"
                className="bg-[#8B4513] text-white px-4 py-1 md:px-6 md:py-3 rounded-xl md:rounded-full hover:bg-[#91572d] transition"
              >
                Place Order
              </button>
            </form>
            <div className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold mb-2 mt-4 md:mt-8">Your Order:</h2>
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center justify-between bg-[#faeee6] p-2 md:p-4 rounded-lg shadow">
                  <div className="flex items-center gap-2 md:gap-3">
                    <Image src={item.imageUrl} alt={item.title} width={60} height={60} className="rounded-md w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem]" />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p>Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p>Rs. {item.price * item.quantity}</p>
                </div>
              ))}
              <div className="text-right text-[1rem] md:text-xl font-bold mt-2 md:mt-4">Total: Rs. {total.toFixed(2)}</div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
