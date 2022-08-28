import React from 'react'
import InputForm from './InputForm'
import Image from 'next/image'

const Container = () => {
  return (
    <div className="flex  ">
      <div className='flex ml-32 flex-col '>

        <div className="mt-52 left-16 relative">
          <h1 className='text-[40px]' >Need to Rent a House?</h1>
          <p className='mb-7'>We&#39;ll help you find your next home.</p>
        </div>
        <InputForm />
      </div>
      <div className=" grid grid-cols-6 ">

        <div className="relative col-start-1 col-end-6 w-[690px] h-[650px] ml-5 z-0">
          <Image
            src={"/house.png"}
            alt="house"
            layout='fill'

          />
        </div>
        <div className="relative col-start-6 col-end-7 place-self-end w-[50px] h-[650px]">
          <Image
            src={"/half-house.png"}
            alt="house"
            layout='fill'
          />
        </div>

      </div>
    </div>
  )
}

export default Container
