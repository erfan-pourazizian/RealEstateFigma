import React from 'react'
import Image from 'next/image'

const PeopleSection = () => {
  return (
    <div className='relative mt-36 mx-10'>

      <div className="absolute left-10 w-[160px] h-[130px]">
        <Image
          src="/Images/comma.png"
          alt="comma"
          layout='fill'
        />
      </div>
      <h1 className="text-spSize1 text-sp-gray2 text-center font-semibold">What People Say About Us</h1>
      <div className="grid grid-cols-2  place-items-center mt-14 mx-20 ">
        <div className="relative w-full  h-[360px]">
          <Image
            src="/Images/woman.png"
            alt="woman"
            layout='fill'
          />
        </div>
        <div className= "ml-16">
          <h3 className='text-3xl font-bold text-sp-gray2'>Angelie Jolie</h3>
          <div className="w-[80%]">
            <p className='text-lg  text-sp-gray2 mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <p className='text-xs text-sp-gray2 mt-7'>Home seller, Malang</p>
        </div>
      </div>
    </div>
  )
}

export default PeopleSection
