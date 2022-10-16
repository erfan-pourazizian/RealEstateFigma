import Link from "next/link"

const LinkColumn = ({
  footerDetails: {
    part,
    LinkHandlerOptions
  }
}) => {
  return (
    <div className="flex flex-col mt-3 sm:mt-0">
      <p className="text-sm font-bold text-sp-gray2 mb-[5px]">{part}</p>
      {LinkHandlerOptions.map((opt) => {
        return (
          <Link href={`${opt.link}`} key={opt.name}>
            <p className="my-[5px] w-auto text-sp-gray2 hover:text-sp-orange3 hover:translate-x-2 transition duration-500 ease-in-out text-sm cursor-pointer">
              {opt.name}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default LinkColumn
