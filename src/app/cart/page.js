'use client'
import React from 'react'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import Navbar from '@/compnents/navbar'
import Link from 'next/link'

export default function CartPage() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart()

  const getTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#c1a089] text-[#8B4513]">
      <Navbar />
      <h1 className="font_style text-[2rem] md:text-[3rem] tracking-wider font-extrabold mb-4 md:mb-8 text-center text-[#8B4513] mt-[-1rem] md:mt-0">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-[0.9rem] text-center md:text-xl mt-[2rem]">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto p-2 md:p-5 space-y-6">
          {cartItems.map((item, index) => (
            <div key={item._id || item.slug || index} className="flex items-center gap-2 md:gap-5 bg-[#faeee6] p-2 md:p-4 rounded-lg shadow transform transition duration-300 hover:scale-102 group">
              <Image src={item.imageUrl} alt={item.title} width={100} height={100} className="rounded-md w-[5rem] h-[5rem]" />
              <div className="flex-1">
                <h2 className="text-[1rem] text-xl font-semibold">{item.title}</h2>
                <p className='text-[0.8rem] text-xl'>Rs. {item.price} × {item.quantity}</p>
                <div className="flex items-center mt-2 gap-2">
                  <button onClick={() => decreaseQuantity(item._id)} className="bg-[#c1a089] px-2 rounded">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item._id)} className="bg-[#c1a089] px-2 rounded">+</button>
                </div>
              </div>
              <button onClick={() => removeFromCart(item._id)} className="text-black font-bold text-[1.7rem] md:text-4xl shake-on-hover">🗑</button>
            </div>
          ))}

          <div className="text-right text-[1.2rem] md:text-2xl font-bold">
            Total: Rs. {getTotal()}
          </div>
          <div className="text-right mt-0 md:mt-4">
            <Link href="/checkout">
                <button className="bg-[#8B4513] text-white px-3 md:px-6 py-2 md:py-3 rounded-full hover:bg-[#91572d] transition">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
