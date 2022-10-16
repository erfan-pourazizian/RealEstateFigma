import LinkColumn from './LinkColumn'
import Image from 'next/image'
import { footerOptions, socialMediaOptions } from '../../config/footerOptions'
import SocialMedia from './SocialMedia'

const Footer = () => {

  return (
    <div className='bg-contain bg-bottom bg-no-repeat' style={{ backgroundImage: 'url(/Images/footer.webp)' }}>

      <div className='relative flex flex-col sm:grid sm:grid-cols-4 lg:grid-cols-5 sm:ml-[7%] lg:mx-[11%] pb-12 sm:pb-24'>
        <div className="flex flex-col lg:col-span-2 items-center sm:items-start order-last sm:order-none mt-8 sm:mt-0">
          <div className="relative w-[100px] h-[20px] ">
            <Image
              src="/Images/rent-logo.webp"
              layout='fill'
              objectFit='cover'
              alt="logo"
            />
          </div>
          <p className='w-[40%] sm:w-[80%] lg:w-[50%] text-xs md:text-sm text-sp-gray2 my-4 font-light sm:font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className='flex gap-2 md:gap-6'>
            {socialMediaOptions.map((option) => {
              return (
                <SocialMedia socialMediaOptions={option} key={option.alt} />
              )
            })}
          </div>
        </div>
        <div className='flex mx-auto text-center sm:text-left flex-row gap-6 sm:gap-14 md:gap-20 lg:gap-28 xl:gap-40 2xl:gap-48 col-span-3'>
        {footerOptions.map((option) => {
          return (
            <LinkColumn footerDetails={option} key={option.part} />
            )
          })}
          </div>
      </div>
    </div>
  )
}

export default Footer
