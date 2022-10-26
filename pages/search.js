import Image from "next/image";
import {fetchApi, baseUrl} from "../api/fetchApi";
import Property from "../components/FeaturedProperties/Property";
import SearchFilters from "../components/SearchFilters";
import { NextSeo } from 'next-seo';

const Search = ({properties}) => {
    return (
        <div className="mx-[5%] mt-28">
            <NextSeo
                title="Search Page | Real estate"
                description="you can filter properties here."
            />
           <SearchFilters/>
            <div className="flex flex-wrap justify-center mb-8">
                {properties.map((property) => (
                    <Property property={property} key={property.id}/>
                ))}
            </div>
            {properties.length === 0 && (
                <div className="flex justify-center items-center flex-col my-5">
                    <p className="text-xl lg:text-3xl mt-3 mb-5 text-sp-orange2 font-semibold"> No Result Found</p>
                    <div className="relative w-1/2 h-72 lg:h-96 mb-20">
                        <Image alt="no result" src={"/images/no-results.webp"} layout="fill"/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Search


export async function getServerSideProps({query}) {
    const purpose = query.purpose || "for-rent";
    const rentFrequency = query.rentFrequency || "yearly";
    const minPrice = query.minPrice || "0";
    const maxPrice = query.maxPrice || "1000000";
    const roomsMin = query.roomsMin || "0";
    const bathsMin = query.bathsMin || "0";
    const sort = query.sort || "price-desc";
    const areaMax = query.areaMax || "35000";
    const locationExternalIDs = query.locationExternalIDs || "5002";
    const categoryExternalID = query.categoryExternalID || "4";

    const data = await fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}&hitsPerPage=18`
    );
    return {
        props: {
            properties: data?.hits,
        },
    };
}
  