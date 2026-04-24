import CartButton from '../../../compnents/cartButton'
import Navbar from '@/compnents/navbar'
import { client } from '@/sanity/lib/client'
import Image from 'next/image'

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "item" && defined(slug.current)][].slug.current`)
  return slugs.map((slug) => ({ slug }))
}

export default async function FlavorDetail({ params }) {
  const query = `*[_type == "item" && slug.current == $slug][0]{
  _id, 
  title,
  description,
  price,
  image {
    asset->{
      _id,
      url,
      _ref
    }
  },
  "imageUrl": image.asset->url
}`

  const item = await client.fetch(query, { slug: params.slug })

  if (!item) return <p className="text-center text-red-600 py-20">Item not found</p>

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#c1a089] text-[#8B4513] pb-12">
        <Navbar/>
        <div className='max-w-4xl mx-auto px-3 pb-12'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center pt-2 md:pt-10 px-2">
        <div>
          {item.imageUrl && (
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={600}
              height={200}
              className="rounded-xl shadow-lg w-full h-[15rem] md:w-[25rem] md:h-[25rem] object-cover"
            />
          )}
        </div>
        <div>
          <h1 className="font_style text-[1.7rem] md:text-4xl font-bold tracking-widest text-[#8B4513] mb-5 md:mb-10">{item.title}</h1>
          <p className="text-[#91572d] text-[0.9rem] md:text-lg mb-0 md:mb-4 p-2">{item.description}</p>
          <p className="text-[1rem] text-2xl font-semibold text-[#8B4513] px-2 md:px-0 p-0 md:p-3">Rs. {item.price}</p>
          <div className='px-2'><CartButton product={item}/></div>
        </div>
      </div>
      </div>
    </div>
  )
}