import Image from 'next/image'
import Link from 'next/link'
import { houseOptions, officeOptions } from '../../utils/OurServicesOptions'

const services = () => {
  return (
    <div className='mx-[5%] mt-20 sm:mt-28' id='ourservices'>
      <div className='text-center'>
        <h1 className='text-3xl sm:text-spSize1 text-sp-gray2 font-semibold'>Our 2 Services</h1>
        <p className='text-base sm:text-spSize2 text-sp-gray2 font-semibold mt-3'>WE KEEP IT SIMPLE</p>
      </div>

      <div className='flex flex-col sm:flex-row mt-10 sm:mt-36'>
        <div className="bg-sp-gray3 relative mx-auto sm:mx-0 sm:absolute sm:w-3/4 py-2 sm:py-7 md:py-10 lg:py-24 xl:py-28 2xl:py-[150px] sm:mt-3 rounded-b sm:rounded px-3 sm:px-7 md:px-9 lg:px-14 xl:px-16 2xl:px-24 pb-3">
          <h1 className="flex my-4 sm:my-0 sm:static place-content-center sm:place-content-start text-2xl md:text-2xl lg:text-3xl xl:text-rentH1Size text-sp-gray2 font-bold">{houseOptions.title}</h1>
          <p className='text-center sm:text-left text-sm sm:text-xs md:text-base xl:text-spSize2 text-sp-gray2 my-3 sm:my-2 lg:my-3 xl:my-4 2xl:my-5'>{houseOptions.mainParagraph}</p>
          <p className='font-light sm:font-normal text-center sm:text-left text-sp-gray2 text-sm sm:text-xs md:text-sm sm:w-[49%]'>{houseOptions.paragraph}</p>
          <Link href={houseOptions.buttonLink}>
            <button className="font-medium sm:font-semibold flex mx-auto sm:mx-0 text-xs lg:text-sm 2xl:text-base bg-sp-orange px-5 md:px-6 mt-5 py-1 h-9 md:h-[45px] rounded-t-sm sm:rounded-sm text-white sm:mr-auto cursor-pointer
            spHoverButton1 hover:bg-inherit place-items-center">{houseOptions.buttonName}</button>
          </Link>
        </div>
        <div className="w-full sm:w-auto order-first sm:order-none mx-auto sm:ml-auto sm:mr-28 lg:mr-32 xl:mr-40">
          <div className='relative w-auto sm:w-[270px] md:w-[350px] lg:w-[470px] xl:w-[530px] 2xl:w-[600px] h-[290px] sm:h-[280px] md:h-[340px] lg:h-[450px] xl:h-[500px] 2xl:h-[560px] z-10 sm:bottom-8 md:bottom-10 sm:left-32'>
            <Image
              alt='house'
              src={"/Images/services-house.webp"}
              layout="fill"
            />
          </div>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row mt-20 sm:mt-36'>
        <div className="w-full sm:w-auto mx-auto sm:mr-auto sm:ml-40 lg:ml-40">
          <div className='relative w-auto rounded-t-sm sm:rounded-sm sm:w-[270px] md:w-[350px] lg:w-[470px] xl:w-[530px] 2xl:w-[600px] h-[290px] sm:h-[280px] md:h-[340px] lg:h-[450px] xl:h-[500px] 2xl:h-[560px] z-10 sm:top-10 md:top-12 sm:right-40'>
            <Image
              alt='house'
              src={"/Images/services-office.webp"}
              layout="fill"
            />
          </div>
        </div>
        <div className="bg-sp-gray3 relative mx-auto sm:mx-0 sm:absolute sm:w-2/3 py-2 sm:py-7 md:py-10 lg:py-24 xl:py-28 2xl:py-36 rounded-b sm:rounded px-3 sm:px-7 md:px-9 lg:px-14 xl:px-16 2xl:px-24 sm:text-right sm:right-0 sm:mr-20 sm:mt-3 pb-3">
          <h1 className="flex my-4 sm:my-0 sm:static place-content-center sm:place-content-end text-xl md:text-2xl lg:text-3xl xl:text-rentH1Size text-sp-gray2 mt-4 font-bold">{officeOptions.title}</h1>
          <p className='text-center sm:text-right text-sm sm:text-xs md:text-base xl:text-spSize2 text-sp-gray2 my-3 lg:my-3 xl:my-4 2xl:my-5 sm:ml-auto sm:w-[50%]'>{officeOptions.mainParagraph}</p>
          <p className='font-light sm:font-normal text-center sm:text-right text-sp-gray2 text-sm sm:text-xs md:text-sm sm:w-[57%] sm:ml-auto'>{officeOptions.paragraph}</p>
          <Link href={officeOptions.buttonLink}>
            <button className="font-medium sm:font-semibold flex mx-auto sm:mx-0 bg-sp-orange text-xs lg:text-sm 2xl:text-base px-5 md:px-6 mt-5 py-1 h-9 md:h-[45px] rounded-sm text-white sm:ml-auto cursor-pointer
             spHoverButton1 hover:bg-inherit place-items-center">{officeOptions.buttonName}</button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default services
