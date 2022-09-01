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
                <div className='flex pt-2 items-center justify-between'>
                    <div className='flex items-center'>

                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Property
