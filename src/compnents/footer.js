'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#faeee6] text-[#8B4513] border-t border-rose-200">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="font_style text-2xl tracking-widest font-extrabold text-[#8B4513] mb-3">Sweet Swirls</h2>
          <p className="text-sm">
            Serving happiness in every scoop. Handcrafted ice cream made with love and fresh ingredients.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <div className="space-y-1">
            <div>
              <Link href="/" className="hover:text-[#9f7354] transition">Home</Link>
            </div>
            <div>
              <Link href="/about" className="hover:text-[#9f7354] transition">About</Link>
            </div>
            <div>
              <Link href="/flavors" className="hover:text-[#9f7354] transition">Flavors</Link>
            </div>
            <div>
              <Link href="/contact" className="hover:text-[#9f7354] transition">Contact</Link>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <p className="text-sm">123 Flavor Street, Food City</p>
          <p className="text-sm">Email: <a href="mailto:hello@sweetswirls.com" className="underline hover:text-[#9f7354]">hello@sweetswirls.com</a></p>
          <p className="text-sm">Phone: <a href="tel:+1234567890" className="underline hover:text-[#9f7354]">+1 (234) 567-890</a></p>
        </div>
      </div>
      <div className="bg-[#8B4513] text-white text-center py-4 text-sm">
        © {new Date().getFullYear()} Sweet Swirls Ice Cream. All rights reserved.
      </div>
    </footer>
  );
}
