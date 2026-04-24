'use client'
import React, { useState } from 'react'
import Navbar from '@/compnents/navbar'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'

export default function ReviewsPage() {
  const { cartItems } = useCart()

  const [reviews, setReviews] = useState([
    { name: 'Ali', rating: 5, message: 'Amazing flavors! Highly recommended 🍦' },
    { name: 'Sara', rating: 4, message: 'Good quality, will order again!' },
  ])

  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.message) return
    setReviews([...reviews, formData])
    setFormData({ name: '', rating: 5, message: '' })
  }

  const getTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#c1a089] text-[#8B4513]">
      <Navbar />
      <div className="max-w-5xl mx-auto px-3 md:px-6 pb-10">
        <h1 className="font_style text-[2rem] md:text-[3rem] tracking-widest font-extrabold mb-10 text-center text-[#8B4513] mt-[-1rem] md:mt-0">Customer Reviews</h1>
        {cartItems.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-3">Your Cart Summary</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center justify-between bg-[#faeee6] p-4 rounded-lg shadow">
                  <div className="flex items-center gap-3">
                    <Image src={item.imageUrl} alt={item.title} width={60} height={60} className="rounded-md" />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p>Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p>Rs. {item.price * item.quantity}</p>
                </div>
              ))}
              <div className="text-right font-bold text-xl mt-2">Total: Rs. {getTotal()}</div>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit} className="bg-[#faeee6] p-3 md:p-6 rounded-lg shadow space-y-4 mb-10">
          <h2 className="text-2xl font-semibold mb-2">Leave a Review</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded"
          />

          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded"
          >
            {[5, 4, 3, 2, 1].map((star) => (
              <option key={star} value={star}>
                {star} Star{star > 1 ? 's' : ''}
              </option>
            ))}
          </select>

          <textarea
            name="message"
            placeholder="Your review..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded"
          />

          <button
            type="submit"
            className="bg-[#8B4513] text-white px-6 py-3 rounded-full hover:bg-[#91572d] transition"
          >
            Submit Review
          </button>
        </form>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-2">What others are saying:</h2>
          {reviews.map((review, index) => (
            <div key={index} className="bg-[#faeee6] p-4 rounded-lg shadow">
              <h3 className="text-lg font-bold">{review.name}</h3>
              <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
              <p className="mt-1">{review.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

