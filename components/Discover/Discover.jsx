import ImageHolder from "./ImageHolder";
import { discoverOptions } from "../../config/discoverOptions";
import Link from "next/link";

const Discover = () => {


    return (
        <div className='mt-44 flex flex-col sm:flex-row' id="discover">
            <div data-aos="fade-right" className='flex flex-col mt-12 sm:mt-8 ml-[5%] mr-[5%] sm:mr-16 text-center sm:text-left '>
                <h1 className='text-xl md:text-3xl xl:text-spSize1 text-sp-gray2 font-bold'>Discover Your Perfect Home Today</h1>
                <p className="my-5 w-[70%] sm:w-auto mx-auto sm:mx-0 lg:my-4 xl:my-5 text-base md:text-sm lg:text-base xl:text-spSize2 text-sp-gray2">Welcome to your source for leasing and
                    managing beautiful rental homes Indonesia</p>
                <Link href={"/search"}>
                    <button className="w-28 mx-auto sm:mx-0 xl:w-36 px-4 xl:px-5 h-9 xl:h-[45px] text-xs xl:text-base font-semibold bg-sp-orange py-1 rounded-sm text-white mr-auto
                    spHoverButton1">Discover
                        Now
                    </button>
                </Link>
            </div>


            <div data-aos="zoom-in-up" data-aos-duration="2000" className='order-first sm:order-none ml-[3%] sm:ml-0 mt-14 gap-3 lg:gap-6 sm:w-[60%] flex sm:grid grid-flow-col auto-cols-max'>
                {discoverOptions.map((option) => {
                    return (
                        <div className="relative w-[120px] sm:w-[145px] lg:w-[175px] xl:w-[210px] 2xl:w-[255px] h-[218px] md:h-[248px]  lg:h-[270px] xl:h-[315px] 2xl:h-[350px] [&:nth-child(2)]:flex [&:nth-child(2)]:flex-col [&:nth-child(2)]:bottom-12 last:w-[55px] last:hidden last:lg:flex [&:nth-child(3)]:sm:hidden [&:nth-child(3)]:md:flex" key={option.src}>
                            <ImageHolder src={option.src} firstText={option.firstText} secondText={option.secondText} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Discover
