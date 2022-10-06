const LinkHandler = ({link, name}) => {
    return (
        <a href={link} className="my-1 w-fit text-sp-gray2 hover:text-sp-orange3 hover:translate-x-2 transition duration-500 ease-in-out text-sm">{name}</a>
    )
}

export default LinkHandler
