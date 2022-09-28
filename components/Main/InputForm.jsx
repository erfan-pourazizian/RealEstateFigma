import InputHolder from './InputHolder'
import { options } from '../../utils/options'
import router from "next/router";


const InputForm = () => {
    return (
        <div className='flex flex-col py-1  absolute z-10 bg-white shadow-sp-input rounded mt-[15rem] md:mt-[19rem] xl:mt-[21rem] lg:mt-[16rem] mr-4'>
            <p className="ml-8 text-base xl:text-spSize2 text-[#4F4F4F] mt-5">For Current rent estimate, please provide the following
                :</p>
            <div className="flex xl:flex-row flex-col mb-5">

                <div className="grid grid-cols-6 xl:grid-cols-9 xl:grid-row-2 gap-6 ml-6 xl:ml-12  mt-5 mr-4">
                    {options.map(opt => {
                        return (
                            <div
                                className="col-span-2 xl:col-span-2 [&:nth-child(1)]:col-span-4 xl:[&:nth-child(1)]:col-span-7 xl:[&:nth-child(2)]:w-[140px]  xl:[&:nth-child(6)]:ml-2 xl:[&:nth-child(3)]:col-start-1 xl:[&:nth-child(3)]:col-end-4"
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
                // onClick={}
                >Submit
                </button>
            </div>
        </div>
    )
}

export default InputForm
