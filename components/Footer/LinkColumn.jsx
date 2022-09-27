import LinkHandler from "./LinkHandler"


const LinkColumn = ({
  footerDetails: {
    part,
    name1,
    link1,
    name2,
    link2,
    name3,
    link3,
    name4,
    link4,
  }
}) => {
  return (
    <div className="flex flex-col">
      <p className="text-sm font-bold text-sp-gray2 mb-1">{part}</p>
      <LinkHandler link={link1} name={name1} />
      <LinkHandler link={link2} name={name2} />
      <LinkHandler link={link3} name={name3} />
      <LinkHandler link={link4} name={name4} />
    </div>
  )
}

export default LinkColumn
