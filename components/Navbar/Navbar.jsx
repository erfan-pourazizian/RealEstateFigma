import Image from 'next/image'
import DropDown from "./DropDown";
import { dropDownOptions } from '../../utils/dropDownOptions';
import Link from 'next/link';
import LinkHandler from './LinkHandler';

const Navbar = () => {
    return (
        <div className='w-full flex py-6 shadow-sp-navbar fixed top-0 z-20 bg-white cursor-pointer px-[5%]'>
            <Link href={"/"}>
                <div className='flex self-center relative w-24 h-8'>
                    <Image
                        src="/Images/rent-logo.webp"
                        layout='fill'
                        alt="logo"
                    />
                </div>
            </Link>
            <div className='hidden md:flex ml-auto '>
                {dropDownOptions.map((dropDown) => {
                    return (
                        <DropDown dropDownDetails={dropDown} key={dropDown.name} />
                    )
                })}
                <Link href='/search' >
                    <a className='inline-flex justify-center md:text-lg  self-center lg:text-spSize2 font-medium mr-8 hover:text-sp-orange3 transition duration-500 ease-in-out'>Search Rentals</a>
                </Link>
                <a href='https://www.linkedin.com/in/erfan-pourazizian/' target={'_blank'} rel="noreferrer">
                    <button className="border flex border-sp-orange rounded px-7 py-2 cursor-pointer hover:bg-sp-orange3 transition duration-500 ease-in-out text-sp-orange self-center text-contactSize hover:text-white">
                        Contact Us
                    </button>
                </a>
            </div>


            <div className="relative md:hidden   ml-auto">
                <div className="flex items-center">
                    <div className='relative w-11 h-11'>
                        <Image
                            src="/Images/menu.webp"
                            layout='fill'
                            alt='icon'
                        />
                    </div>
                </div>
                <ul className="hidden hover:flex peer-hover:flex peer-hover:animate-navbar-anim peer-hover:ease-in-out peer-hover:duration-300 flex-col absolute top-0 w-48  mt-10 bg-gray-100 rounded-lg shadow-xl hover:duration-500 hover:translate-x-4">
                    <LinkHandler link={"link_1"} option={"option_1"} />
                    <LinkHandler link={"link_2"} option={"option_2"} />
                    <LinkHandler link={"link_3"} option={"option_3"} />
                </ul>
            </div>

        </div>
    )
}

export default Navbar
