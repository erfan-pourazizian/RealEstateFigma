import Property from './Property'

const FeaturedProperties = ({ propertiesForRent }) => {
  return (
    <div className='mt-36 mx-10'>
      <h1 className='text-spSize1 text-sp-gray2 text-center font-semibold'>Featured Properties</h1>
      <div className='mt-14 flex flex-wrap ml-4'>
        {propertiesForRent?.map((property) => <Property property={property} key={property.id} />)}
      </div>
      <div className="flex justify-center mt-9">
        <button className=" bg-sp-orange px-4 py-2  rounded text-white ml-2">See More Property </button>
      </div>
    </div>
  )
}

export default FeaturedProperties


