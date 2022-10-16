import LinkHandler from "./LinkHandler";

const DropDown = ({
    dropDownDetails: {
        name,
        LinkHandlerOptions
    } }) => {
    return (
        <div className="lg:mr-7 relative">
            <div className="peer flex flex-row  w-full px-3 py-2 md:text-lg lg:text-spSize2 hover:text-sp-orange3 transition duration-300 ease-in-out">
                <span className="select-none">{name}</span>
                <div className="flex items-center ml-3">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" >
                        <path d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z" fill="black" />
                    </svg>
                </div>
            </div>
            <ul className="hidden hover:flex peer-hover:flex peer-hover:animate-navbar-anim peer-hover:ease-in-out peer-hover:duration-300   flex-col absolute top-0 w-48  mt-10 bg-gray-100 rounded-lg shadow-xl hover:duration-500 hover:translate-x-4">
                {LinkHandlerOptions.map((opt,index) => {
                    return (
                        <LinkHandler options={opt} key={index} />
                    )
                })}

            </ul>
        </div>
    )
}

export default DropDown;