import Image from 'next/image'

const SocialMedia = ({ socialMediaOptions: {
    link,
    img,
    alt,
} }) => {
    return (
        <a href={link}>
            <div className="relative w-7 h-7">
                <Image
                    src={img}
                    alt={alt}
                    layout="fill"
                />
            </div>
        </a>
    )
}

export default SocialMedia
