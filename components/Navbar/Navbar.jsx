import Image from 'next/image'
import DropDown from "./DropDown";
import { dropDownOptions } from '../../config/dropDownOptions';
import Link from 'next/link';
import MobileNavbar from './MobileNavbar';

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
                {dropDownOptions.map((dropDown,index) => {
                    return (
                        <DropDown dropDownDetails={dropDown} key={index} />
                    )
                })}
                <Link href='/search' >
                    <div className='relative flex justify-center self-center mr-7'>
                        <a className='md:text-lg lg:text-spSize2  hover:text-sp-orange3 transition duration-500 ease-in-out'>Search Rentals</a>
                        <span className="animate-ping h-2 w-2 rounded-full bg-blue-700 opacity-75"></span>
                    </div>
                </Link>
                <a href='https://www.linkedin.com/in/erfan-pourazizian/' target={'_blank'} rel="noreferrer">
                    <button className="border flex border-sp-orange rounded px-7 py-2 cursor-pointer hover:bg-sp-orange3 transition duration-500 ease-in-out text-sp-orange self-center text-contactSize hover:text-white">
                        Contact Us
                    </button>
                </a>
            </div>


            <div className="relative md:hidden   ml-auto">
            <MobileNavbar/>
            </div>

        </div>
    )
}

export default Navbar
