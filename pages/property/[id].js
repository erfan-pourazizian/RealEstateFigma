import verify from "../../public/Images/verify.webp";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
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
    <div className="m-14 ">
      <NextSeo
          title={title}
          description="you can watch more information here."
      />
      <p className="font-semibold mb-5  text-3xl text-sp-orange2">{title}</p>
      <SwiperHandler photos={photos} />
      <div className="w-full p-6">
        <div className="flex  pt-2 items-center">
          <div className="pr-3 ">
            {isVerified && (
              <Image src={verify} alt="verified" width={24} height={24} />
            )}
          </div>
          <p className="font-bold text-lg mb-2">
            {price} {rentFrequency && `/ ${rentFrequency}`}
          </p>
        </div>
        <div className="flex mt-2 ">
          <div className="flex">
            <div className="mr-3 flex self-end ">
              <Image src="/Images/sqft.webp" width={20} height={20} alt="sqft" />
            </div>
            <p className="text-contactSize text-sp-gray2 ">
              {area.toString().length > 5
                ? area.toString().substring(0, 5)
                : area}
              sqft
            </p>
          </div>

          <div className="flex">
            <div className="mr-3 ml-4 flex self-end ">
              <Image src="/Images/beds.webp" width={20} height={20} alt="beds" />
            </div>
            <p className="text-contactSize text-sp-gray2 ">{rooms} </p>
          </div>

          <div className="flex">
            <div className="mr-3 ml-7 flex self-end ">
              <Image src="/Images/bath.webp" width={20} height={20} alt="bath" />
            </div>
            <p className="text-contactSize text-sp-gray2 ">{baths} </p>
          </div>
          <p className=" font-bold ml-4 text-sp-orange2 bg-gray-200 rounded px-4 ">{purpose}</p>
        </div>
        <div>
          <p
            className="text-sp-gray2 mt-4"
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
                  className="font-bold text-sp-orange2 text-lg p-2 bg-gray-200 m-1 rounded"
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
