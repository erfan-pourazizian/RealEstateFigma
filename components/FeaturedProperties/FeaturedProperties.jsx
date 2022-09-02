import React from 'react'
import Property from './Property'
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import DefaultImage from "../../public/Images/default-house.png"

const FeaturedProperties = ({ propertiesForRent }) => {

  // static code for property

  // const property = {
  //   coverPhoto: {
  //     url: DefaultImage
  //   },
  //   price: '2000',
  //   rooms: '4',
  //   title: 'Songgoriti villa aduhai',
  //   baths: '4',
  //   area: '4',
  //   externalID: '1926',
  // }

  console.log(`${propertiesForRent}<=======result`); //  undefined mide
  return (
    <div className='mt-36'>
      <h1 className='text-spSize1 text-sp-gray2 text-center font-semibold'>Featured Properties</h1>
      <div className='mt-14'>

        {/* dynamic code for property*/}

        {/* {propertiesForRent?.map((property) => <Property property={property} key={property.id} />)} */}


        {/* static code for property*/}
        {/* <Property property={property} /> */}
      </div>
      <div className="flex justify-center mt-6">
        <button className=" bg-sp-orange px-4 py-2  rounded text-white ml-2">See More Property </button>
      </div>

    </div>
  )
}

export default FeaturedProperties


export async function getStaticProps() {
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);
  console.log("test");
  return {
    props: {
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
