
import InputForm from './InputForm'
import Image from 'next/image'

const Main = () => {
  return (
    <div className="flex mt-[92px] mb-[29rem] sm:mb-[24rem] md:mb-[22rem] lg:mb-[16rem] xl:mb-0" id='main'>
      <div className='flex ml-[5%] flex-col'>

        <div className="mt-32 sm:mt-32 md:mt-44 lg:mt-36 xl:mt-60 2xl:mt-52 relative">
          <h1 className='text-2xl md:text-3xl xl:text-4xl 2xl:text-MainH1Size text-sp-gray2 font-semibold'>Need to Rent a House?</h1>
          <p className='mt-2 text-xs md:text-base xl:text-xl 2xl:text-spSize2 text-sp-gray2'>We&#39;ll help you find your next home.</p>
        </div>
        <InputForm />
      </div>
      <div className="md:flex grid grid-flow-col auto-cols-max gap-5 ml-auto -z-10">
       
          <div className="relative w-[210px] sm:w-[400px] md:w-[540px] lg:w-[600px] xl:w-[690px] h-[240px] sm:h-[400px] md:h-[480px] lg:h-[530px] xl:h-[680px]">
            <Image
              src={"/Images/house.webp"}
              alt="house"
              layout='fill'
              quality={50}
            />
          </div>
          <div className="relative  place-self-end w-[50px] h-[300px] md:h-[480px] lg:h-[530px] xl:h-[680px] hidden lg:flex">
            <Image
              src={"/Images/half-house.webp"}
              alt="house"
              layout='fill'
            />
          </div>
     

      </div>
    </div>
  )
}

export default Main
