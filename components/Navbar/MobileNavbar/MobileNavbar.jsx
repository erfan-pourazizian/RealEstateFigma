import { useState } from "react";
import Image from "next/image";
import { mobileNavbarOptions } from "../../../config/mobileNavbarOptions";
import Link from "next/link";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-[.10rem] rounded-full bg-black transition ease transform duration-300`;


  return (
    <>
      <button
        className="flex flex-col h-10 w-10 rounded justify-center items-center group bg-[#ff8c1b]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${isOpen && "rotate-45 translate-y-2"
            }`}
        />
        <div
          className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-100 "
            }`}
        />
        <div
          className={`${genericHamburgerLine} ${isOpen && "-rotate-45 -translate-y-2"
            }`}
        />
      </button>
      <aside className={`transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='flex mx-auto mt-10 relative w-28 h-9 mb-5'>
          <Image
            src="/Images/rent-logo.webp"
            layout='fill'
            alt="logo"
          />
        </div>
        <div className="divide-y-2">
          {mobileNavbarOptions.map(opt => {
            return (
              <Link href={opt.link} key={opt.name}>
                <div className="flex mx-2 py-1 rounded-sm my-1" onClick={() => setIsOpen(!isOpen)}>
                  <div className="relative grid w-7 h-7  mr-2 ml-2">
                    <Image src={opt.src}
                      layout="fill"
                      alt={opt.alt} />
                  </div>
                  <p className="my-auto font-light">{opt.name}</p>
                </div>
              </Link>
            )
          })
          }
        </div>
      </aside>
    </>
  );
};

export default MobileNavbar
