import Image from "next/image"

const Custom404 = () => {
  return (
    <div className="relative w-full  h-[500px] mt-16 mb-14">
      <Image src="/Images/404.webp" alt="404" layout="fill"/>
    </div>
  )
}

export default Custom404
