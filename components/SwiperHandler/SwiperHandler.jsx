import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper";

const SwiperHandler = ({ photos }) => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[EffectFade, Autoplay, Pagination, Navigation]}
                className="mySwiper rounded-[1.2rem] lg:rounded-[2rem]"
            >
                {photos.slice(0,9).map((photo, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-52 md:h-[500px] ">
                                <Image src={photo.url} alt="house-picture" layout="fill" placeholder="blur" blurDataURL="/Images/no-image.webp" />
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    )
}

export default SwiperHandler
