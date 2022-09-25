const LinkHandler = ({link, name}) => {
    return (
        <a href={link} className="my-1 text-sp-gray2 hover:text-sp-orange3 transition duration-500 ease-in-out text-sm">{name}</a>
    )
}

export default LinkHandler
