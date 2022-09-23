import Image from 'next/image'

const services = () => {
  return (
    <div className=' mx-20 mt-28' id='ourservices'>
      <div className='text-center'>
        <h1 className='text-spSize1 text-sp-gray2 font-semibold'>Our 2 Services</h1>
        <p className='text-xl text-sp-gray2 font-semibold mt-3'>WE KEEP IT SIMPLE</p>
      </div>

      <div className='flex mt-36 '>
        <div className='grid grid-flow-col auto-cols-max gap-4  rounded'>
          <div className="col-span-4  bg-sp-gray3 -z-10 w-[185%]">
            <div className='ml-32 my-36 '>
              <h1 className="text-rentH1Size text-sp-gray2 font-bold">RENT-UP SERVICE</h1>
              <p className='text-xl text-sp-gray2 mt-5'>We take the hassle out of finding your next tenant</p>
              <p className='text-sp-gray2 text-sm mt-5'>Everything from marketing your property to moving in your tenant is all<br /> handled by our team. You set the requirements and we screen the tenants<br /> to find you the perfect match. No upfront fees.</p>
              <button className="font-semibold bg-sp-orange px-6 mt-5 py-1 h-[45px] rounded-sm text-white mr-auto">Learn more</button>
            </div>
          </div>
          <div className="col-start-5 col-end-9">
            <div className='relative w-[600px] h-[560px] z-10 bottom-10 left-32'>
              <Image
                alt='house'
                src={"/Images/services-house.webp"}
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>

      <div className='flex mt-36 '>
        <div className='grid grid-flow-col auto-cols-max gap-4 relative '>
          <div className="col-start-1 col-end-4">
            <div className='relative w-[600px] h-[560px] z-10 top-10 right-32 ml-32'>
              <Image
                alt='house'
                src={"/Images/services-office.webp"}
                layout="fill"
              />
            </div>
          </div>
          <div className="col-start-2  bg-sp-gray3 -z-10 absolute w-[228%] rounded">
            <div className='mr-32 my-36 text-right  '>
              <h1 className="text-rentH1Size text-sp-gray2 mt-4 font-bold">MANAGEMENT SERVICE</h1>
              <p className='text-xl text-sp-gray2 mt-5'>Ready for a profitable property management <br/> service you can rely on?</p>
              <p className='text-sp-gray2 text-sm mt-5'>Test drive our tech-driven, service focused property management service <br/> that delivers real clarity on your assets, and prioritizes your net profitability.<br/> Flat fee service without any hidden fees. Open 7 days a week.</p>
              <button className="font-semibold bg-sp-orange px-6 mt-5 py-1 h-[45px] rounded-sm text-white mr-auto">Learn more</button>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default services
