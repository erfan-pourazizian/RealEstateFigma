import { useState } from 'react';
import router from 'next/router';
import { filterData, getFilterValues } from "../../config/filterData";

const SearchFilters = () => {
    const [filters, setFilters] = useState(filterData)

    const searchProperties = (filterValues) => {

        const path = router.pathname;
        const { query } = router;

        const values = getFilterValues(filterValues);

        values.forEach((item) => {
            if (item.value && filterValues?.[item.name]) {
                query[item.name] = item.value
            }
        })

        router.push({ pathname: path, query })
    }
    const rangeHandler = () => {

    }
    return (
        <div data-aos="zoom-in" data-aos-duration="2000" className="flex bg-gradient-to-r 
        from-blue-500 
        to-orange-500 
        via-orange-600 animate-gradient-xy p-4 items-center sm:justify-center flex-col sm:flex-row sm:flex-wrap rounded-xl mt-5 mb-5">
            {filters.map((filter) => (
                <div key={filter.queryName} className="flex mx-1">
                    <p className="self-center text-white text-xs md:text-sm lg:text-base">{filter.placeholder + " :"}</p>
                    {filter.isRange
                        ?
                        filter?.items?.map((item, index) => (
                            <div className='flex  items-center mx-1 my-2 md:my-0 text-gray-300 text-xs md:text-sm lg:text-base hover:outline-none' key={index}>
                                <span className='mx-1'>{item.min?.value}</span>
                                <input type='range' min={item.min?.value} max={item.max?.value} step="10000"
                                    onChange={(e) => {
                                        clearTimeout
                                        setTimeout(() => {
                                            searchProperties({ [filter.queryName]: e.target.value })
                                        }, 1000)

                                    }} />
                                <span className='mx-1'>{item.max?.value}</span>
                            </div>
                        )) :
                        <select
                            placeholder={filter.placeholder}
                            className="w-fit md:p-1 m-2 rounded-sm font-normal bg-gray-200 transition ease-in-out text-gray-700 hover:bg-white
                            text-xs md:text-sm lg:text-base my-2 outline-none"
                            onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}>
                            {filter?.items?.map((item) => (
                                <option value={item.value} key={item.value}>{item.name}</option>
                            ))}
                        </select>
                    }
                </div>
            ))}
        </div>
    );
};

export default SearchFilters;