import Image from "next/image";
import strawberry from "../../public/image/strawberry.png";
import chocolate from "../../public/image/chocolate.png";
import vanilla from "../../public/image/vanilla.png";
import blue_berry from "../../public/image/blue_berry.png";
import ice_cream from "../../public/image/main.png";
import Navbar from "@/compnents/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#c1a089] overflow-x-hidden">
      <Navbar />

      <section className="flex flex-wrap md:flex-nowrap w-full">
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div className="mb-[0.1rem] px-3 md:px-0 md:pl-[10rem] pt-2 md:pt-5">
            <h5 className="font-bold text-[0.6rem] md:text-[1rem] text-[#b78664] hover:text-[#9f7354] cursor-pointer pb-2">WELCOME TO</h5>
            <h2 className="font_style font-bold text-[2.2rem] md:text-[3rem] text-[#8B4513] mb-8 md:mb-10 cursor-pointer tracking-wider">Ice Cream Shop</h2>
            <p className="text-[#91572d] text-[0.8rem] md:text-lg">Enjoy our rich, creamy ice creams in flavors like chocolate, vanilla, strawberry, and more. Made fresh daily, each scoop is a sweet treat to brighten your day.</p>
            <div className="mt-3 md:mt-6 flex gap-4">
              <Link href={"/reviews"}><button className="p-[0.5rem] md:p-[0.7rem] bg-[#8B4513] text-[0.7rem] md:text-[1rem] rounded-xl md:rounded-2xl text-white hover:bg-[#91572d]">Review</button></Link>
              <Link href={"/flavors"}><button className="p-[0.5rem] md:p-[0.7rem] bg-[#8B4513] text-[0.7rem] md:text-[1rem] rounded-xl md:rounded-2xl text-white hover:bg-[#91572d]">More Flavor</button></Link>
            </div>
          </div>

          <div className="relative z-10 w-full max-w-[500px] h-[250px] mx-auto mt-[5.5rem] overflow-visible hidden md:block">
            <div className="absolute inset-0 border-t-2 border-[#8B4513] rounded-t-full w-full h-full"></div>
            <div className="absolute inset-0 rounded-t-full">
              <div className="absolute left-0 top-[100px] flex flex-col items-center">
                <Image src={strawberry} alt="Strawberry" className="w-[4rem] h-[4rem] shake-on-hover rounded-full transition-transform duration-300 hover:scale-105 cursor-pointer custom-shadow-hover" />
                <span className="text-xs text-gray-600 rotate-[-75deg] mt-[2rem]"></span>
              </div>
              <div className="absolute left-[120px] top-[-10px] flex flex-col items-center">
                <Image src={chocolate} alt="Chocolate" className="w-[3.3rem] h-[3.5rem] shake-on-hover rounded-full transition-transform duration-300 hover:scale-105 cursor-pointer custom-shadow-hover" />
                <span className="text-xs text-gray-600"></span>
              </div>
              <div className="absolute right-[120px] top-[-30px] flex flex-col items-center">
                <Image src={blue_berry} alt="Blueberry" className="w-[4.5rem] h-[4.5rem] shake-on-hover rounded-full transition-transform duration-300 hover:scale-105 cursor-pointer custom-shadow-hover" />
                <span className="text-xs text-gray-600"></span>
              </div>
              <div className="absolute right-[-10px] top-[70px] flex flex-col items-center">
                <Image src={vanilla} alt="Vanilla" className="w-[5rem] h-[5rem] shake-on-hover rounded-full transition-transform duration-300 hover:scale-105 cursor-pointer custom-shadow-hover" />
                <span  className="text-xs text-gray-600 mb-2"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <Image
            src={ice_cream}
            alt="Ice Cream"
            className="w-[60%] md:w-full max-w-[370px] object-contain"
          />
        </div>
      </section>
    </div>
  );
}
