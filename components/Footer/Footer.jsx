import LinkColumn from './LinkColumn'
import Image from 'next/image'

const Footer = () => {

  const firstColumn = {
    part: "Community",
    name1: "For Rent",
    link1: "#",
    name2: "For Seller",
    link2: "#",
    name3: "For Buyer",
    link3: "#",
    name4: "Search Home",
    link4: "#",
  }
  const secondColumn = {
    part: "About",
    name1: "Our Story",
    link1: "#",
    name2: "Careers",
    link2: "#",
    name3: "Meet the team",
    link3: "#",
  }
  const thirdColumn = {
    part: "Contact",
    name1: "Sawojajar club",
    link1: "#",
    name2: "Simple text",
    link2: "#",
    name3: "Malang Jawa timur",
    link3: "#",
    name4: "Indonesia",
    link4: "#",
  }

  return (
    <div className='bg-contain bg-bottom bg-no-repeat' style={{backgroundImage: 'url(/Images/footer.png)'}}>

      <div className='relative grid grid-cols-5  ml-40 mr-14 pb-24'>
        <div className="flex flex-col col-span-2">
          <div className="relative w-[100px] h-[20px] ">
            <Image
              src="/Images/rent-logo.png"
              layout='fill'
              objectFit='cover'
              alt="logo"
            />
          </div>
          <p className='w-[43%] text-sm text-sp-gray2 my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className='flex gap-5'>

            <a href="#">
              <div className="relative w-7 h-7">
                <Image
                  src="/Images/facebook.png"
                  alt="Facebook"
                  layout="fill"
                />
              </div>
            </a>

            <a href="#">
              <div className="relative w-7 h-7 ">
                <Image
                  src="/Images/instagram.png"
                  alt="instagram"
                  layout="fill"
                />
              </div>
            </a>

            <a href="#">
              <div className="relative w-7 h-7">
                <Image
                  src="/Images/twitter.png"
                  alt="twitter"
                  layout="fill"
                />
              </div>
            </a>

          </div>
        </div>

        <LinkColumn footerDetails={firstColumn} />
        <LinkColumn footerDetails={secondColumn} />
        <LinkColumn footerDetails={thirdColumn} />
      </div>
    </div>
  )
}

export default Footer
