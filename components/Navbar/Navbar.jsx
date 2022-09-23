import Image from 'next/image'
import DropDown from "./DropDown";

const Navbar = () => {
    return (
        <div className='container flex  px-7 py-6 shadow-sp-navbar fixed top-0  z-20 bg-white'>
            <div className='flex justify-start ml-28'>
                <Image
                    src="/Images/rent-logo.webp"
                    width={100}
                    height={15}
                    objectFit='contain'
                    alt="logo"
                />
            </div>
            <div className='flex ml-auto mr-10'>
                <DropDown name={"I'm a LandLord"} op1={"op1"} op2={"op2"} op3={"op3"}/>
                <DropDown name={"I'm a Tenant"} op1={"op1"} op2={"op2"} op3={"op3"}/>
                <p className='inline-flex justify-center  self-center text-spSize2 font-medium mr-8'>Search Rentals</p>
                <div className=" border flex border-sp-orange rounded px-7  ">
                    <p className='text-sp-orange self-center  text-contactSize '>Contact Us</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
