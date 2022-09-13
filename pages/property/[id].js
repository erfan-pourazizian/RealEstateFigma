import verify from "../../public/Images/verify.png";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import Image from "next/image";
import SwiperHandler from "../../components/SwiperHandler/SwiperHandler";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => {
  return (
    <div className="p-4 m-auto">
      <SwiperHandler photos={photos} />
      <div className="w-full p-6">
        <div className="flex  pt-2 items-center">
          <div className="pr-3 ">
            {isVerified && (
              <Image src={verify} alt="verified" width={24} height={24} />
            )}
          </div>
          <p className="font-bold text-lg">
            AED {price} {rentFrequency && `/${rentFrequency}`}
          </p>
        </div>
        <div className="flex mt-2 ">
          <div className="flex">
            <div className="mr-3 flex self-end ">
              <Image src="/Images/sqft.png" width={20} height={20} alt="sqft" />
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
              <Image src="/Images/beds.png" width={20} height={20} alt="beds" />
            </div>
            <p className="text-contactSize text-sp-gray2 ">{rooms} </p>
          </div>

          <div className="flex">
            <div className="mr-3 ml-7 flex self-end ">
              <Image src="/Images/bath.png" width={20} height={20} alt="bath" />
            </div>
            <p className="text-contactSize text-sp-gray2 ">{baths} </p>
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
