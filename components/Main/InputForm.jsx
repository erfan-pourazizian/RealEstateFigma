import InputHolder from './InputHolder'
import { options } from '../../config/options'
import router from "next/router";
import Image from 'next/image'

const InputForm = () => {
    const buttonHandler = () => {
        router.push({pathname:'/search', 
        query:{ ...router.query }})
    } 
    return (
        <div data-aos="fade-right" className='flex flex-col py-1 absolute  bg-white shadow-sp-input rounded mt-[15rem] md:mt-[19rem] xl:mt-[21rem] lg:mt-[16rem] mr-4'>
            <p className="ml-8 text-base xl:text-spSize2 text-[#4F4F4F] mt-5">For Current rent estimate, please provide the following
                :</p>
            <div className="flex xl:flex-row flex-col mb-5">

                <div className="grid grid-cols-6 xl:grid-cols-9 xl:grid-row-2 gap-6 ml-6 xl:ml-12  mt-5 mr-4">
                    {options.map(opt => {
                        return (
                            <div
                                className="col-span-2 xl:col-span-2 [&:nth-child(1)]:col-span-4 xl:[&:nth-child(1)]:col-span-7 xl:[&:nth-child(2)]:w-[140px] xl:[&:nth-child(6)]:ml-2 [&:nth-child(3)]:col-span-6 sm:[&:nth-child(3)]:col-span-2 xl:[&:nth-child(3)]:col-start-1 xl:[&:nth-child(3)]:col-end-4"
                                key={opt.inputName}>
                                <InputHolder inputName={opt.inputName} img={opt.img} alt={opt.alt} options={opt.opt}
                                    filter={opt} />
                            </div>
                        )
                    })}
                </div>
                <button
                    className="self-center mt-5 xl:self-end col-span-2 w-28 xl:w-36 bg-sp-orange px-4 xl:px-7 py-1 text-sm xl:text-base h-9 xl:h-[45px] rounded-sm text-white mx-10
                        spHoverButton1"
                onClick={buttonHandler}
                >Submit
                </button>
            </div>
            <div className='absolute -bottom-3 sm:-bottom-7 lg:-bottom-12 xl:-bottom-16 2xl:-bottom-20 -left-3 sm:-left-5 lg:-left-9 xl:-left-10 2xl:-left-14 w-14 sm:w-20 lg:w-32 xl:w-36 2xl:w-40 h-14 sm:h-20 lg:h-32 xl:h-36 2xl:h-40 md:-z-10'>
                <Image src="/Images/dotted-square-1.png" alt="dotted-square" layout='fill'  />
            </div>
            <div className='absolute hidden md:flex top-0 right-0 md:w-12 lg:w-16 md:h-12 lg:h-16 z-10'>
                <Image src="/Images/dotted-square-4.png" alt="dotted-square" layout='fill'  />
            </div>
        </div>
    )
}

export default InputForm
