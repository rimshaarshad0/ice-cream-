import React from 'react'
import Image from 'next/image'
import { client } from '../../sanity/lib/client'
import Navbar from '@/compnents/navbar'
import Link from 'next/link'
import CartButton from '../../compnents/cartButton'

export default async function Flavors() {
  const query = `*[_type == "item"]{
  _id,
  title,
  price,
  slug,
  image {
    asset->{
      _id,
      url,
      _ref
    }
  },
  "imageUrl": image.asset->url
}`
  const items = await client.fetch(query)

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#c1a089] text-[#8B4513] pb-12">
      <Navbar/>
      <h1 className="font_style text-[2rem] md:text-[3rem] tracking-wider font-extrabold mb-6 md:mb-10 text-center text-[#8B4513] mt-[-1rem] md:mt-0">Our Flavors</h1>

      <div className="grid px-3 md:px-0 grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 max-w-5xl mx-auto">
        {items.map((item) => (
  <div
    key={item._id}
    className="bg-[#faeee6] shadow-lg rounded-2xl p-2 md:p-5 transform transition duration-300 hover:scale-102 group"
  >
    <Link href={`/flavors/${item.slug.current}`}>
    {item.imageUrl && (
      <Image
        src={item.imageUrl}
        alt={item.title}
        width={400}
        height={300}
        title="Click to see detail"
        className="cursor-pointer rounded-xl object-cover w-full h-28 md:h-48 "
      />
    )}

    <div className="">
      <h2 className="mt-2 md:mt-4 text-[0.8rem] md:text-xl font-semibold text-[#8B4513]">{item.title}</h2>
      <p className="text-[0.7rem] md:text-lg font-bold text-[#8B4513] mt-1 md:mt-3">Rs. {item.price}</p>
    </div>
    </Link>
    <CartButton product={item}/>
  </div>
))}

      </div>
    </div>
  )
}
