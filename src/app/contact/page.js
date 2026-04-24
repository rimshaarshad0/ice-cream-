'use client';
import Navbar from '../../compnents/navbar';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#c1a089] text-[#8B4513]">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 pb-12">
        <h1 className="font_style text-[2.3rem] md:text-[3rem] tracking-widest font-extrabold mb-8 text-center text-[#8B4513] mt-[-1rem]">Contact Us</h1>
        <p className="text-center text-[0.8rem] md:text-lg mb-0 md:mb-5">We&apos;d love to hear from you! Fill out the form below or reach us directly.</p>

        <form className="p-2 md:p-8">
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-[#8B4513] px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] mb-4"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-[#8B4513] px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] mb-4"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message here..."
              className="w-full border border-[#8B4513] px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#8B4513] hover:bg-[#91572d] text-white px-4 py-2 md:px-6 md:py-3 rounded-xl font-semibold transition duration-200 mt-4"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
