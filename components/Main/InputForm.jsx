import InputHolder from './InputHolder'
import {options} from '../../utils/options'
import router from "next/router";

const InputForm = () => {
    const submitHandler =  ()=> {
        router.push("/search?sort=price-des&maxPrice=135000&minPrice=70000")
    }
    return (
        <div className='flex flex-col py-1  relative w-[145%] z-10 bg-white shadow-sp-input rounded'>
            <p className="ml-5 text-base text-[#4F4F4F] mt-5">For Current rent estimate, please provide the following
                :</p>
            <div className="flex mb-5">

                <div className="grid grid-cols-11 grid-row-2 gap-6 mt-2 ml-10 w-[90%]  ">
                    {options.map(opt => {
                        return (
                            <div
                                className="col-span-2 [&:nth-child(1)]:col-span-7 [&:nth-child(6)]:ml-2 [&:nth-child(3)]:col-start-1 [&:nth-child(3)]:col-end-4"
                                key={opt.inputName}>
                                <InputHolder inputName={opt.inputName} img={opt.img} alt={opt.alt} options={opt.opt} filter={opt}/>
                            </div>
                        )
                    })}
                    <button
                        className=" self-end col-span-2  bg-sp-orange px-7 py-1 h-[35px] rounded-sm text-white ml-2" onClick={submitHandler}>Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InputForm
