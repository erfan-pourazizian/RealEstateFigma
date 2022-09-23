import { useState } from 'react'


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
        <div className="flex flex-row justify-center  mr-7">
            <div className="flex-none ">
                <button onMouseEnter={handleDropDown} className="flex flex-row justify-between w-full px-4 py-2  text-spSize2 font-medium">
                    <span className="select-none">{name}</span>
                    {arrow ?
                        <div className="flex items-center  ml-3  -scale-100">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" >
                                <path d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z" fill="black" />
                            </svg>
                        </div>
                        :
                        <div className="flex items-center  ml-3 ">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" >
                                <path d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z" fill="black" />
                            </svg>
                        </div>
                    }

                </button>
                {dropDown &&
                    <div id="options" className="absolute w-48  mt-2 bg-gray-100 rounded-lg shadow-xl">
                        <a href={link_1} className="block px-4 py-2 text-gray-800 hover:bg-sp-orange3 hover:text-white rounded">{option_1}
                        </a>
                        <a href={link_2} className="block px-4 py-2 text-gray-800 hover:bg-sp-orange3 hover:text-white rounded">{option_2}
                        </a>
                        <a href={link_3} className="block px-4 py-2 text-gray-800 hover:bg-sp-orange3 hover:text-white rounded">{option_3}
                        </a>
                    </div>
                }
            </div>
        </div>
    )
}

export default DropDown;