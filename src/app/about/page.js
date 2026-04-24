import Image from 'next/image';
import Navbar from '../../compnents/navbar';
import group from '../../../public/image/group.png'; 
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#c1a089] text-[#8B4513]">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pb-10">
        <h1 className="font_style text-[1.7rem] md:text-[3rem] tracking-wider md:tracking-widest font-extrabold mb-4 text-center text-[#8B4513]">
          About Our Ice Cream Shop
        </h1>
        <div className="flex justify-center mb-5 md:mb-10">
          <Image
            src={group}
            alt="Ice Cream Shop"
            className="w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem]"
          />
        </div>
        <p className="text-[0.8rem] md:text-lg mb-6 text-center">
          Welcome to <span className="font-semibold">Sweet Swirls Ice Cream</span> a place where every scoop tells a story.
          Our journey began with a simple love for ice cream and the joy it brings to people of all ages.
        </p>
        <h2 className="font_style text-[1.5rem] md:text-[2rem] pb-[0.7rem] tracking-widest font-bold mb-3">Our Story</h2>
        <p className="mb-4 md:mb-6 text-[0.8rem] md:text-lg">
          What started as a family kitchen experiment has grown into a beloved local shop. Our founders,
          passionate about creating unique, homemade flavors, opened the first Sweet Swirls shop in 2020. Since then,
          we&apos;ve become a favorite spot for families, kids, and ice cream lovers across the city.
        </p>
        <h2 className="font_style text-[1.5rem] md:text-[2rem] pb-[0.7rem] tracking-widest font-bold mb-1 md:mb-3">Our Mission</h2>
        <p className="mb-4 md:mb-6 text-[0.8rem] md:text-lg">
          Our mission is simple: to spread joy, one scoop at a time. We believe in using high-quality, natural
          ingredients to craft delicious and imaginative flavors you won’t find anywhere else.
        </p>
        <h2 className="font_style text-[1.5rem] md:text-[2rem] pb-[0.7rem] tracking-widest font-bold mb-3">What Makes Us Special</h2>
        <div className="list-disc list-inside mb-4 md:mb-6 space-y-1 text-[0.8rem] md:text-lg">
          <div>⇝ Fresh, locally sourced ingredients</div>
          <div>⇝ Handcrafted flavors made daily</div>
          <div>⇝ Creative seasonal specials</div>
          <div>⇝ Family-friendly atmosphere</div>
          <div>⇝ Warm and welcoming service</div>
        </div>
        <h2 className="font_style text-[1.5rem] md:text-[2rem] pb-[0.7rem] tracking-widest font-bold mb-3">Our Community</h2>
        <p className="mb-4 md:mb-6 text-[0.8rem] md:text-lg">
          We&apos;re proud to be a part of this amazing community. Whether you’re stopping by after school, on a sunny
          afternoon, or just because — we’re always happy to serve a smile with every scoop.
        </p>
        <div className="mt-5 md:mt-10">
          <p className="mb-4 text-[0.8rem] md:text-lg">Ready to treat yourself?</p>
          <Link
            href="/flavors"
            className="inline-block bg-[#8B4513] hover:bg-[#91572d] text-white font-semibold px-4 py-2 md:px-6 md:py-3 rounded-xl transition duration-200"
          >
            Explore Our Flavors
          </Link>
        </div>
      </div>
    </div>
  );
}
