import Image from 'next/image'
import DropDown from "./DropDown";
import { dropDownOptions } from '../../utils/dropDownOptions';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='container flex px-7 py-6 shadow-sp-navbar fixed top-0 z-20 bg-white cursor-pointer'>
            <Link href={"/"}>
                <div className='flex justify-start ml-28'>
                    <Image
                        src="/Images/rent-logo.webp"
                        width={100}
                        height={15}
                        objectFit='contain'
                        alt="logo"
                    />
                </div>
            </Link>
            <div className='flex ml-auto mr-10'>
                {dropDownOptions.map((dropDown) => {
                    return (
                        <DropDown dropDownDetails={dropDown} key={dropDown.name} />
                    )
                })}
                <Link href='/search' >
                    <a className='inline-flex justify-center  self-center text-spSize2 font-medium mr-8 hover:text-sp-orange3 transition duration-500 ease-in-out'>Search Rentals</a>
                </Link>
                <Link href='/contact-me'>
                    <button className="border flex border-sp-orange rounded px-7 py-2 cursor-pointer hover:bg-sp-orange3 transition duration-500 ease-in-out text-sp-orange self-center text-contactSize hover:text-white">
                        Contact Us
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
