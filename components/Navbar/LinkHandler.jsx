import Link from 'next/link'
import Image from 'next/image';

const LinkHandler = ({options}) => {
    return (
        <Link href={options.link}>
            <div className='flex px-4 py-2 text-gray-800 hover:bg-sp-orange3 transition duration-300 ease-in-out hover:text-white rounded'>
                <div className='relative w-5 h-5 mr-2 place-self-center'>
                    <Image
                        src={options.src}
                        alt="main"
                        layout="fill"
                    />
                </div>
                <p className="">
                    {options.option}
                </p>
            </div>
        </Link>
    )
}

export default LinkHandler
