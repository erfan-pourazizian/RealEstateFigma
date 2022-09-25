import { useState } from 'react'
import LinkHandler from './LinkHandler'

const DropDown = ({
    dropDownDetails: {
        name,
        option_1,
        link_1,
        option_2,
        link_2,
        option_3,
        link_3
    } }) => {
    const [dropDown, setDropDown] = useState(false)
    const [arrow, setArrow] = useState(false)
    const handleDropDown = () => {
        setDropDown(!dropDown)
        setArrow(!arrow)
    }
    return (
        <div className="mr-7">
            <button onClick={handleDropDown} className="flex flex-row justify-between w-full px-4 py-2  text-spSize2  font-medium hover:text-sp-orange3 transition duration-500 ease-in-out">
                <span className="select-none">{name}</span>
                {arrow ?
                    <div className="flex items-center  ml-3  -scale-100">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" >
                            <path d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z" fill="black" />
                        </svg>
                    </div>
                    :
                    <div className="flex items-center ml-3">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" >
                            <path d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z" fill="black" />
                        </svg>
                    </div>
                }

            </button>
            {dropDown &&
                <div className="absolute w-48  mt-2 bg-gray-100 rounded-lg shadow-xl">
                    <LinkHandler link={link_1} option={option_1} />
                    <LinkHandler link={link_2} option={option_2} />
                    <LinkHandler link={link_3} option={option_3} />
                </div>
            }
        </div>
    )
}

export default DropDown;