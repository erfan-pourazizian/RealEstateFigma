import Link from 'next/link'


const LinkHandler = ({ link, option }) => {
    return (
        <Link href={link}>
            <li>
                <a className="block px-4 py-2 text-gray-800 hover:bg-sp-orange3 transition duration-300 ease-in-out hover:text-white rounded">
                    {option}
                </a>
            </li>
        </Link>
    )
}

export default LinkHandler
