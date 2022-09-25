import InputHolder from './InputHolder'
import {options} from '../../utils/options'
import router from "next/router";


const InputForm = () => {
    return (
        <div className='flex flex-col py-1  absolute z-10 bg-white shadow-sp-input rounded mt-[21rem]'>
            <p className="ml-8 text-spSize2 text-[#4F4F4F] mt-5">For Current rent estimate, please provide the following
                :</p>
            <div className="flex mb-5">

                <div className="grid grid-cols-9 grid-row-2 gap-6  ml-10  w-[110%] mt-5">
                    {options.map(opt => {
                        return (
                            <div
                                className="col-span-2 [&:nth-child(1)]:col-span-7 [&:nth-child(6)]:ml-2 [&:nth-child(3)]:col-start-1 [&:nth-child(3)]:col-end-4"
                                key={opt.inputName}>
                                <InputHolder inputName={opt.inputName} img={opt.img} alt={opt.alt} options={opt.opt}
                                             filter={opt}/>
                            </div>
                        )
                    })}
                        </div>
                    <button
                        className="self-end col-span-2 w-48 bg-sp-orange px-7 py-1 h-[45px] rounded-sm text-white mx-10
                        spHoverButton1"
                        // onClick={}
                    >Submit
                    </button>
            </div>
        </div>
    )
}

export default InputForm
