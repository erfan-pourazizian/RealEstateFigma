import Image from 'next/image'
import Link from 'next/link'
import { houseOptions, officeOptions } from '../../utils/OurServicesOptions'

const services = () => {
  return (
    <div className=' mx-20 mt-28' id='ourservices'>
      <div className='text-center'>
        <h1 className='text-spSize1 text-sp-gray2 font-semibold'>Our 2 Services</h1>
        <p className='text-spSize2 text-sp-gray2 font-semibold mt-3'>WE KEEP IT SIMPLE</p>
      </div>

      <div className='flex mt-36 '>
        <div className="bg-sp-gray3 absolute w-3/4 py-[150px] mt-3 rounded px-24">
          <h1 className="text-rentH1Size text-sp-gray2 font-bold">{houseOptions.title}</h1>
          <p className='text-spSize2 text-sp-gray2 mt-5'>{houseOptions.mainParagraph}</p>
          <p className='text-sp-gray2 text-sm mt-5 w-[49%]'>{houseOptions.paragraph}</p>
          <Link href={houseOptions.buttonLink}>
            <button className="font-semibold bg-sp-orange px-6 mt-5 py-1 h-[45px] rounded-sm text-white mr-auto cursor-pointer
            spHoverButton1 hover:bg-inherit">{houseOptions.buttonName}</button>
          </Link>
        </div>
        <div className="ml-auto mr-40">
          <div className='relative w-[600px] h-[560px] z-10 bottom-10 left-32'>
            <Image
              alt='house'
              src={"/Images/services-house.webp"}
              layout="fill"
            />
          </div>
        </div>
      </div>

      <div className='flex mt-36 '>
        <div className="mr-auto ml-40">
          <div className='relative w-[600px] h-[560px] z-10 top-12 right-40'>
            <Image
              alt='house'
              src={"/Images/services-office.webp"}
              layout="fill"
            />
          </div>
        </div>
        <div className="bg-sp-gray3 absolute w-2/3 py-36 rounded px-24 text-right right-0 mr-20 mt-3">
          <h1 className="text-rentH1Size text-sp-gray2 mt-4 font-bold">{officeOptions.title}</h1>
          <p className='text-spSize2 text-sp-gray2 mt-5'>{officeOptions.mainParagraph}</p>
          <p className='text-sp-gray2 text-sm mt-5 w-[57%] ml-auto'>{officeOptions.paragraph}</p>
          <Link href={officeOptions.buttonLink}>
            <button className="font-semibold bg-sp-orange px-6 mt-5 py-1 h-[45px] rounded-sm text-white mr-auto cursor-pointer
             spHoverButton1 hover:bg-inherit">{officeOptions.buttonName}</button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default services
