import React from 'react'

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
      <p className="text-sm font-bold text-sp-gray2 mb-1 ">{part}</p>
      <a href={link1} className="my-1 text-sp-gray2 text-sm">{name1}</a>
      <a href={link2} className="my-1 text-sp-gray2 text-sm">{name2}</a>
      <a href={link3} className="my-1 text-sp-gray2 text-sm">{name3}</a>
      <a href={link4} className="my-1 text-sp-gray2 text-sm">{name4}</a>
    </div>
  )
}

export default LinkColumn
