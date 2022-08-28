import React from 'react'
import Image from 'next/image'

const Discover = () => {
  return (
    <div className='mt-44 flex'>
      <div className='flex flex-col mt-8 ml-20 mr-16'>
        <h1 className='text-spSize1 text-sp-gray2 font-bold'>Discover Your Perfect<br /> Home Today</h1>
        <p className=" my-5 text-xl text-discover-color">Welcome to your source for leasing and managing <br /> beautiful rental homes Indonesia</p>
        <button className="font-semibold bg-sp-orange px-7 py-1 h-[45px] rounded-sm text-white mr-auto">Discover Now</button>
      </div>


      <div className='gap-8 w-[60%] grid grid-flow-col auto-cols-max'>

        <div className='relative  w-[255px] h-[350px]' >
          <Image
            src="/nature-1.png"
            alt='nature'
            layout='fill'
          />
        </div>

        <div className='relative flex flex-col bottom-12 w-[255px] h-[350px]'>
          <Image
            src="/nature-2.png"
            alt='nature'
            layout='fill'
          />
          <div className='relative mt-auto top-[50px]'>
            <p className='text-xl text-black z-10'>Malang, Jawa timur</p>
            <p className='text-sm text-black z-10'>6 Property listed</p>
          </div>
        </div>

        <div className='relative  w-[255px] h-[350px]'>
          <Image
            src="/nature-3.png"
            alt='nature'
            layout='fill'
          />
        </div>

        <div className='flex  relative  w-[70px] h-[350px] ml-auto'>
          <Image
            src="/nature-4.png"
            alt='nature'
            layout='fill'
          />
        </div>

      </div>
    </div>
  )
}

export default Discover
