import Link from "next/link";
import Image from 'next/image'


const Property = ({
                      property: {
                          coverPhoto,
                          price,
                          rooms,
                          title,
                          baths,
                          area,
                          externalID,
                      },
                  }) => {
    return (
        <Link href={`/property/${externalID}`} passHref>
            <div data-aos="zoom-in-down" className='flex flex-col w-full sm:w-1/2 lg:w-1/3 pt-0 justify-start cursor-pointer px-3 mb-5'>
                <div className='relative'>
                    <div className='absolute w-[25%] h-[13%] top-0 left-0 z-10'>
                        <Image
                            src="/Images/for-rent.webp"
                            layout='fill'
                            alt='for-rent'
                        />
                    </div>
                    <div className="relative w-full h-[230px]  sm:h-[180px] md:h-[200px] lg:h-[190px] xl:h-[230px] 2xl:h-[280px]
                    ">
                        <Image
                            src={coverPhoto ? coverPhoto.url : '/Images/default-house.webp'}
                            placeholder="blur"
                            blurDataURL="/Images/no-image.webp"
                            layout="fill"
                            alt="house"
                            className="rounded-lg"
                            quality={40}
                        />
                    </div>
                </div>
                <div className='mt-4'>
                    <p className='text-base sm:text-lg text-sp-gray2 text-bold'>
                        {title.length > 30 ? `${title.substring(0, 30)}...` : title}
                    </p>
                    <div className='flex items-center mt-1'>

                        <div className="mr-1 md:mr-3 grid">
                            <Image
                                src="/Images/location.webp"
                                width={20}
                                height={20}
                                alt='location'
                            />
                        </div>
                        <p className="text-base sm:text-contactSize text-sp-gray2 ">UAE, dubai </p>
                    </div>
                    <div className="flex mt-2 ">

                        <div className="flex">
                            <div className="mr-1 md:mr-3 grid">
                                <Image
                                    src="/Images/sqft.webp"
                                    width={20}
                                    height={20}
                                    alt='sqft'
                                />
                            </div>
                            <p className="text-base sm:text-contactSize text-sp-gray2 ">
                                {area.toString().length > 5 ? area.toString().substring(0, 5) : area}
                                sqft
                            </p>
                        </div>

                        <div className="flex ml-4">
                            <div className="mr-2 md:mr-3 grid">
                                <Image
                                    src="/Images/beds.webp"
                                    width={20}
                                    height={20}
                                    alt='beds'
                                />
                            </div>
                            <p className="text-base sm:text-contactSize text-sp-gray2 ">{rooms} </p>
                        </div>

                        <div className="flex ml-4 md:ml-7">
                            <div className="mr-2 md:mr-3 grid">
                                <Image
                                    src="/Images/bath.webp"
                                    width={20}
                                    height={20}
                                    alt='bath'
                                />
                            </div>
                            <p className="text-base sm:text-contactSize text-sp-gray2 ">{baths} </p>
                        </div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-sp-orange mt-3 mb-5">$ {price}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Property
