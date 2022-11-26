import Image from 'next/image'
import {getFilterValues} from "../../config/filterData";
import router from "next/router";


const InputHolder = ({inputName, img, alt, options, filter}) => {

    const searchProperties = (filterValues) => {
        const {query} = router;
        const values = getFilterValues(filterValues);

        values.forEach((item) => {
            if (item.value && filterValues?.[item.name]) {
                query[item.name] = item.value
            }
        })

    }



    return (
        <>
            <p className="mb-1 xl:mb-3 text-xs xl:text-base">{inputName}</p>
            <div className='flex items-center bg-sp-gray h-9 xl:h-[45px] '>
                <div className="ml-3 grid">
                    <Image
                        src={img}
                        width={24}
                        height={24}
                        alt={alt}
                    />
                </div>
                <select defaultValue={'DEFAULT'} className="appearance-none ml-2 bg-inherit w-full outline-none"
                        onChange={(e) => searchProperties({[filter.queryName]: e.target.value})}>

                    <option value="DEFAULT" hidden disabled/>
                    {options.map(opt => {
                        return (
                            <option value={opt.value} key={opt.value}>{opt.name}</option>
                        )
                    })},
                </select>
            </div>
        </>
    )
}

export default InputHolder
