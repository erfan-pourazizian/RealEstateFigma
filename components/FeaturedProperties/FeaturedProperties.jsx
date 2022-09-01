import React from 'react'
import Property from './Property'
import {baseUrl, fetchApi} from "../../utils/fetchApi";

const FeaturedProperties = ({ propertiesForRent }) => {
  console.log(`${propertiesForRent}<=======result`); //  undefined mide
  return (
    <div className='mt-36'>
      <h1 className='text-spSize1 text-sp-gray2 text-center'>Featured Properties</h1>
      <div>
        {propertiesForRent?.map((property) => <Property property={property} key={property.id} />)}

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
