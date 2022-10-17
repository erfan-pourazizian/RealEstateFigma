import Link from 'next/link'
import Property from './Property'

const FeaturedProperties = ({ propertiesForRent }) => {
  return (
    <div className='flex flex-col mt-36 mx-[5%]' id='featuredProperties'>
      <h1 data-aos="flip-up" className='text-3xl sm:text-spSize1 text-sp-gray2 text-center font-semibold'>Featured Properties</h1>
      <div className='mt-14 flex flex-wrap'>
        {propertiesForRent?.map((property) => <Property property={property} key={property.id} />)}
      </div>
      <Link href="/search">
        <div data-aos="zoom-in-up" className="flex justify-center mt-3 sm:mt-9">
          <button className="text-sm 2xl:text-base bg-sp-orange px-4 py-2 rounded text-white ml-2 spHoverButton1">See More Property </button>
        </div>
      </Link>
    </div>
  )
}

export default FeaturedProperties


