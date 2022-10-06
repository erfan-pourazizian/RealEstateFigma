import Link from "next/link"

const Connect = () => {
  return (
    <div className='flex bg-sp-orange2 mt-24 sm:mt-40 mb-24 sm:mb-40 mx-[5%] px-[4%] sm:px-[6%] py-4 sm:py-10 rounded-[10px] items-center' id="connect">
      <div className="sm:grow">
        <h1 className='text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-spSize1 text-white font-medium sm:font-bold w-full sm:w-[75%] md:w-[59%]'>Get Connected with top agents near you and find your home</h1>
        <p className='text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-spSize2 text-white mt-2 sm:mt-4'>Get in touch or create account. We are 24/7 available</p>
      </div>
      <Link href="/search">
        <button className="text-xs sm:text-sm lg:text-base bg-white w-[66%] sm:w-[25%] lg:w-[18%] px-[1%] py-2 h-10 sm:h-[60px] rounded hover:bg-black hover:text-white transition duration-500 ease-in-out ">Find Agent</button>
      </Link>
    </div>
  )
}

export default Connect
