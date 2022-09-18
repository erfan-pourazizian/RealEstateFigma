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
        <div className="flex bg-amber-500 p-4 justify-center flex-wrap">
            {filters.map((filter) => (
                <div key={filter.queryName}>
                    <select
                        placeholder={filter.placeholder}
                        className="w-fit p-2"
                        onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}>
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