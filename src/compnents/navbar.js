'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import icon from "../../public/image/icon.png"
import Link from 'next/link'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const { cartItems } = useCart()
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative w-full z-50">
      <div className='w-full h-[15vh] flex justify-between items-center px-4 max-w-[98%] md:max-w-[90%] m-auto'>
        <div>
          <Link href={"/"}>
            <Image src={icon} alt='icon' className='w-[2.5rem] h-[2.5rem] md:w-[4rem] md:h-[4rem] shake-on-hover' />
          </Link>
        </div>
        <div className='hidden md:flex gap-[5rem] text-[#8B4513] font-bold'>
          <Link href="/" className="hover:underline underline-offset-4 transition duration-200">Home</Link>
          <Link href="/about" className="hover:underline underline-offset-4 transition duration-200">About</Link>
          <Link href="/flavors" className="hover:underline underline-offset-4 transition duration-200">Flavors</Link>
          <Link href="/contact" className="hover:underline underline-offset-4 transition duration-200">Contact</Link>
        </div>
        <div className="text-3xl text-[#8B4513] hidden md:block">
          <Link href={"/cart"}>🛒</Link>
          {totalItems > 0 && (
          <span className="absolute top-7 right-[5.5rem] bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
            {totalItems}
          </span>
        )}
        </div>
        <div className="md:hidden flex items-center gap-6">
          <Link href={"/cart"} className="text-2xl">🛒</Link>
          {totalItems > 0 && (
          <span className="absolute top-[1.7rem] right-[4rem] bg-red-500 text-white text-xs px-1.5 py-0.4 rounded-full">
            {totalItems}
          </span>
        )}
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl text-[#8B4513]">
            ☰
          </button>
        </div>
      </div>
        <div className={`md:hidden fixed top-5 right-0 h-1/2 w-2/5 bg-[#faeee6] rounded-tl-2xl rounded-bl-2xl shadow-lg transform transition-all duration-300 ease-in-out z-50 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-6 flex flex-col items-start gap-6 text-[#8B4513] font-bold text-lg">
                <button onClick={() => setMenuOpen(false)} className="text-xl font-bold self-end">✕</button>
                <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
                <Link href="/flavors" onClick={() => setMenuOpen(false)}>Flavors</Link>
                <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
