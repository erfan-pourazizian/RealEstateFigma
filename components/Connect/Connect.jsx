import Link from "next/link"
import Image from 'next/image'

const Connect = () => {
  return (
    <div data-aos="zoom-in" className='relative flex bg-sp-orange2 mt-16 sm:mt-40 mb-16 sm:mb-40 mx-[5%] px-[4%] sm:px-[6%] py-4 sm:py-10 rounded-[10px] items-center' id="connect">
      <div data-aos="fade-right" className="sm:grow">
        <h1 className='text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-spSize1 text-white font-medium sm:font-bold w-full sm:w-[75%] md:w-[59%]'>Get Connected with top agents near you and find your home</h1>
        <p className='text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-spSize2 text-white mt-2 sm:mt-4'>Get in touch or create account. We are 24/7 available</p>
      </div>
      <Link href="/search">
        <button data-aos="zoom-in-up" data-aos-duration="2000" className="text-xs sm:text-sm lg:text-base bg-white w-[45%] sm:w-[25%] lg:w-[18%] sm:px-[1%] py-2 h-10 sm:h-[60px] rounded hover:bg-black hover:text-white transition duration-500 ease-in-out ">Find Agent</button>
      </Link>
      <div data-aos="zoom-in-up" data-aos-duration="2000" className="absolute top-0 right-0 w-12 md:w-24 lg:w-32 h-7 md:h-12 lg:h-16">
        <Image
        src="/Images/connect-1.png"
        alt="square"
        layout="fill"
        />
      </div>
      <div data-aos="fade-down" data-aos-duration="2000" className="absolute top-0 right-0 w-5 md:w-12 lg:w-16 h-12 md:h-20 lg:h-28">
        <Image
        src="/Images/connect-2.png"
        alt="square"
        layout="fill"
        />
      </div>
      <div className="absolute -bottom-5 -left-3 lg:-left-5 md:w-14 lg:w-20 md:h-16 lg:h-20">
        <Image
        src="/Images/dotted-square-3.png"
        alt="Dotted Square"
        layout="fill"
        />
      </div>
    </div>
  )
}

export default Connect
