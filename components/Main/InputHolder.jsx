import Image from 'next/image'
import {getFilterValues} from "../../utils/filterData";
import router from "next/router";
import {useState} from "react";


const InputHolder = ({inputName, img, alt, options, filter}) => {
    const [searchPath, setSearchPath] = useState()

    const searchProperties = (filterValues) => {
        const {query} = router;
        const values = getFilterValues(filterValues);

        values.forEach((item) => {
            if (item.value && filterValues?.[item.name]) {
                query[item.name] = item.value
            }
        })
        return {pathname: '/search', query}
    }
    setSearchPath(searchProperties)

    return (
        <>
            <p className="mb-1">{inputName}</p>
            <div className='flex items-center bg-sp-gray  h-[35px] '>
                <div className="ml-3 justify-self-center">
                    <Image
                        src={img}
                        width={24}
                        height={24}
                        alt={alt}
                    />
                </div>
                <select defaultValue={'DEFAULT'} className="appearance-none bg-inherit w-full"
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
