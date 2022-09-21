import {useState} from 'react';
import router from 'next/router';
import {filterData, getFilterValues} from "../utils/filterData";

const SearchFilters = () => {
    const [filters, setFilters] = useState(filterData)

    const searchProperties = (filterValues) => {

        const path = router.pathname;
        const {query} = router;

        const values = getFilterValues(filterValues);

        values.forEach((item) => {
            if (item.value && filterValues?.[item.name]) {
                query[item.name] = item.value
            }
        })

        router.push({pathname: path, query})
    }
    return (
        <div className="flex bg-sp-orange3 p-4 justify-center flex-wrap rounded-xl mt-5 mb-5">
            {filters.map((filter) => (
                <div key={filter.queryName} className="flex mx-1">
                    <p className="self-center text-white">{filter.queryName + " :"}</p>
                    <select
                        placeholder={filter.placeholder}
                        className="w-fit p-1 m-2 rounded-sm font-normal bg-gray-200 transition ease-in-out text-gray-700 hover:bg-white"
                        onChange={(e) => searchProperties({[filter.queryName]: e.target.value})}>
                        {filter?.items?.map((item) => (
                            <option value={item.value} key={item.value}>{item.name}</option>
                        ))}
                    </select>
                </div>
            ))}
        </div>
    );
};

export default SearchFilters;