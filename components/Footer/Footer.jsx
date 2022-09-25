import LinkColumn from './LinkColumn'
import Image from 'next/image'
import { footerOptions, socialMediaOptions } from '../../utils/footerOptions'
import SocialMedia from './SocialMedia'

const Footer = () => {

  return (
    <div className='bg-contain bg-bottom bg-no-repeat' style={{ backgroundImage: 'url(/Images/footer.webp)' }}>

      <div className='relative grid grid-cols-5  ml-40 mr-14 pb-24'>
        <div className="flex flex-col col-span-2">
          <div className="relative w-[100px] h-[20px] ">
            <Image
              src="/Images/rent-logo.webp"
              layout='fill'
              objectFit='cover'
              alt="logo"
            />
          </div>
          <p className='w-[43%] text-sm text-sp-gray2 my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className='flex gap-5'>
            {socialMediaOptions.map((option) => {
              return (
                <SocialMedia socialMediaOptions={option} key={option.alt} />
              )
            })}
          </div>
        </div>
        {footerOptions.map((option) => {
          return (
            <LinkColumn footerDetails={option} key={option.name1} />
          )
        })}
      </div>
    </div>
  )
}

export default Footer
