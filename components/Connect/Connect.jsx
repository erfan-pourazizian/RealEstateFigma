import Link from "next/link"

const Connect = () => {
  return (
    <div className='flex bg-sp-orange2 mt-40 mb-40 mx-16 px-24 py-10 rounded-[10px] items-center' id="connect">
      <div>
        <h1 className='text-spSize1 text-white font-bold w-[59%]'>Get Connected with top agents near you and find your home</h1>
        <p className='text-spSize2 text-white mt-4'>Get in touch or create account. We are 24/7 available</p>
      </div>
      <Link href="/search">
        <button className=" bg-white w-[18%] px-4 py-2 h-[60px] rounded hover:bg-black hover:text-white transition duration-500 ease-in-out ">Find Agent</button>
      </Link>
    </div>
  )
}

export default Connect
