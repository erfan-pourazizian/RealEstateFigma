import verify from "../../public/Images/verify.png";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import Image from "next/image";
import React, { useRef, useState } from "react";
import SwiperHandler from "../../utils/swiperHandler";

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
