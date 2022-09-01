import React from 'react'
import Link from "next/dist/client/link";
import Image from 'next/image'
import DefaultImage from "../../public/default-house.png"

const Property = ({
    property: {
        coverPhoto,
        price,
        rentFrequency,
        rooms,
        title,
        baths,
        area,
        agency,
        isVerified,
        externalID,
    },
}) => {
    return (
        <Link href={`/property/${externalID}`} passHref>
            <div className='flex flex-wrap w-[420px] p-5 pt-0 justify-start cursor-pointer '>
                <div>
                    <Image
                        src={coverPhoto ? coverPhoto.url : DefaultImage}
                        width={400}
                        height={260}
                        alt="house"
                    />
                </div>
                <div className='mt-4'>
                    <p className='text-lg text-sp-gray2 text-bold'>
                        {title.length > 30 ? `${title.substring(0, 30)}...` : title}
                    </p>
                    <div className='flex items-center mt-1'>

                        <div className="mr-3 flex self-end">
                            <Image
                                src="/location.png"
                                width={20}
                                height={20}
                                alt='location'
                            />
                        </div>
                        <p className="text-contactSize text-sp-gray2 ">example , example</p>
                    </div>
                    <div className="flex mt-2 ">

                        <div className="flex">
                            <div className="mr-3 flex self-end ">
                                <Image
                                    src="/sqft.png"
                                    width={20}
                                    height={20}
                                    alt='sqft'
                                />
                            </div>
                            <p className="text-contactSize text-sp-gray2 ">{area} sqft</p>
                        </div>

                        <div className="flex">
                            <div className="mr-3 ml-4 flex self-end ">
                                <Image
                                    src="/beds.png"
                                    width={20}
                                    height={20}
                                    alt='beds'
                                />
                            </div>
                            <p className="text-contactSize text-sp-gray2 ">{rooms} </p>
                        </div>

                        <div className="flex">
                            <div className="mr-3 ml-7 flex self-end ">
                                <Image
                                    src="/bath.png"
                                    width={20}
                                    height={20}
                                    alt='bath'
                                />
                            </div>
                            <p className="text-contactSize text-sp-gray2 ">{baths} </p>
                        </div>
                    </div>
                    <h3 className="text-3xl text-sp-orange mt-3">$ 2000</h3>
                </div>
            </div>
        </Link>
    )
}

export default Property
