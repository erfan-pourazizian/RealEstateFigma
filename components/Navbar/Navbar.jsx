import Image from 'next/image'
import DropDown from "./DropDown";
import { dropDownOptions } from '../../utils/dropDownOptions';
import Link from 'next/link';

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
            <div className='flex ml-auto '>
                {dropDownOptions.map((dropDown) => {
                    return (
                        <DropDown dropDownDetails={dropDown} key={dropDown.name} />
                    )
                })}
                <Link href='/search' >
                    <a className='inline-flex justify-center  self-center text-spSize2 font-medium mr-8 hover:text-sp-orange3 transition duration-500 ease-in-out'>Search Rentals</a>
                </Link>
                <a href='https://www.linkedin.com/in/erfan-pourazizian/' target={'_blank'} rel="noreferrer">
                    <button className="border flex border-sp-orange rounded px-7 py-2 cursor-pointer hover:bg-sp-orange3 transition duration-500 ease-in-out text-sp-orange self-center text-contactSize hover:text-white">
                        Contact Us
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Navbar
