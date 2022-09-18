import React from 'react'
import Image from 'next/image'

const InputHolder = ({ inputName, img, alt, options }) => {
  return (
    <>
      <p className="mb-1">{inputName}</p>
      <div className='flex items-center bg-sp-gray  h-[35px] '>
        <div className="ml-3 justify-self-center">
          <Image
            src={img}
            width={24}
            height={24}
            alt={alt}
          />
        </div>
        <select defaultValue={'DEFAULT'} className="appearance-none bg-inherit w-full">
          <option value="DEFAULT" hidden disabled  />
          {Object.keys(options).map((opt, index) => {
            return (
              <option value={options[opt].value} key={index}>{options[opt].name}</option>
            )
          })},
        </select>
      </div>
    </>
  )
}

export default InputHolder
