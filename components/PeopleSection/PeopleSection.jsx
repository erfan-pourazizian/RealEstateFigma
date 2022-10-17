import Image from 'next/image'

const PeopleSection = () => {
  return (
    <div className='relative mt-24 sm:mt-36 mx-[3%]' id='peopleSection'>

      <div data-aos="zoom-in-down" data-aos-duration="2000" className="absolute left-10 2xl:left-28 w-[160px] h-[130px]">
        <Image
          src="/Images/comma.webp"
          alt="comma"
          layout='fill'
        />
      </div>
      <h1 data-aos="zoom-in" className="text-3xl sm:text-spSize1 text-sp-gray2 text-center font-semibold">What People Say About Us</h1>
      <div className="flex flex-col sm:grid sm:grid-cols-2 mt-8 sm:mt-14 mx-[6%]">
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="relative w-full 2xl:w-[560px] h-[270px] sm:h-[260px] md:h-[250px] lg:h-[360px]">
          <Image
            src="/Images/woman.webp"
            alt="woman"
            layout='fill'
          />
        </div>
        <div data-aos="zoom-in-down" data-aos-duration="2000" className="sm:ml-10 lg:ml-16 mt-5 sm:my-auto text-center sm:text-left align-middle my-auto flex flex-col">
          <h3 className='text-3xl sm:text-2xl  lg:text-3xl font-bold text-sp-gray2'>Angelie Jolie</h3>
          <div className="lg:w-[82%]">
            <p className='font-light sm:font-normal text-base lg:text-lg  text-sp-gray2 mt-3 lg:mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <p className='font-light sm:font-normal text-xs text-sp-gray2 mt-4 sm:mt-7'>Home seller, Malang</p>
        </div>
      </div>
    </div>
  )
}

export default PeopleSection
