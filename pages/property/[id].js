import { baseUrl, fetchApi } from "../../api/fetchApi";
import Image from "next/image";
import SwiperHandler from "../../components/SwiperHandler/SwiperHandler";
import {NextSeo} from "next-seo";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    isVerified,
    description,
    amenities,
    photos,
    purpose,
  },
}) => {
  return (
    <div className="mx-[5%] lg:mx-[4%] mt-28">
      <NextSeo
          title={title}
          description="you can watch more information here."
      />
      <h1 className="font-semibold mb-6 text-2xl md:text-3xl text-center text-sp-orange2">{title}</h1>
      <SwiperHandler photos={photos} />
      <div className="w-full">
        <div className="flex pt-2 items-center">
          <div className="pr-2">
            {isVerified && (
              <Image src="/Images/verify.webp" alt="verified" width={24} height={24} />
            )}
          </div>
          <p className="font-bold text-lg text-sp-gray2 mb-2">
            {price} {rentFrequency && `/ ${rentFrequency}`}
          </p>
        </div>
        <div className="flex mt-2">
          <div className="flex">
            <div className="mr-1 md:mr-3 grid">
              <Image src="/Images/sqft.webp" width={20} height={20} alt="sqft" />
            </div>
            <p className="text-base lg:text-contactSize text-sp-gray2 ">
              {area.toString().length > 5
                ? area.toString().substring(0, 5)
                : area}
              sqft
            </p>
          </div>

          <div className="flex ml-4">
            <div className="mr-2 md:mr-3 grid">
              <Image src="/Images/beds.webp" width={20} height={20} alt="beds" />
            </div>
            <p className="text-base lg:text-contactSize text-sp-gray2 ">{rooms} </p>
          </div>

          <div className="flex ml-4">
            <div className="mr-2 md:mr-3 grid">
              <Image src="/Images/bath.webp" width={20} height={20} alt="bath" />
            </div>
            <p className="text-base lg:text-contactSize text-sp-gray2 ">{baths} </p>
          </div>
          <p className=" font-bold ml-4 text-sp-orange2 bg-gray-200 rounded px-4 ">{purpose}</p>
        </div>
        <div>
          <p
            className="text-sm lg:text-base text-sp-gray2 mt-6"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div>
          {amenities.length && (
            <p className="text-2xl font-black mt-8">Facilites:</p>
          )}
          <div className="flex flex-wrap mt-4 mb-28">
            {amenities?.map((item) =>
              item?.amenities?.map((amenity) => (
                <p
                  className="font-bold text-sp-orange2 text-sm md:text-base lg:text-lg p-2 bg-gray-200 m-1 rounded"
                  key={amenity.text}
                >
                  {amenity.text}
                </p>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
