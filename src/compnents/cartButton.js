"use client"
import React from 'react'
import { useCart } from '@/context/CartContext'

export default function CartButton({ product }) {
  const { addToCart } = useCart()
  const handleAddToCart = () => {
    const imageRef = product?.image?.asset?._ref
    const normalizedProduct = {
      _id: product._id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl || product.image?.asset?.url || '',
      imageRef: (imageRef && { imageRef }),
    }

    addToCart(normalizedProduct)
  }

  return (
    <button
      onClick={handleAddToCart}
      className="bg-[#8B4513] text-white text-[0.8rem] md:text-[1rem] px-2 md:px-4 mt-2 py-1 md:py-2 mb-2 md:mb-0 rounded-[0.3rem] md:rounded-xl hover:bg-[#91572d] transition"
    >
      Add to Cart
    </button>
  )
}
