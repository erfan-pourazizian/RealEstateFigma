import React from 'react'
import Image from 'next/image'

const InputHolder = ({ inputName, img, alt, op1, op2 }) => {
  return (
    <>
      <p className="mb-1">{inputName}</p>
      <div className='flex items-center bg-sp-gray  h-[35px]'>
        <div className="ml-3 justify-self-center">
          <Image
            src={img}
            width={24}
            height={24}
            alt={alt}
          />
        </div>
        <select defaultValue={'DEFAULT'} className="appearance-none bg-inherit w-full">
          <option value="DEFAULT" hidden disabled  ></option>
          <option>{op1}</option>
          <option>{op2}</option>
        </select>
      </div>
    </>
  )
}

export default InputHolder
