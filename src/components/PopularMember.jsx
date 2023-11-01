import Poster from "../assets/img/poster1.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselImg1 from "../assets/img/carouselImg1.svg";
import CarouselImg2 from "../assets/img/carouselImg2.svg";
import CarouselImg3 from "../assets/img/carouselImg3.svg";

// Import Swiper styles
import "swiper/css";

const PopularMember = () => {
  return (
    <div className="py-[40px]">
      <div className="w-[80%] mx-auto pb-[22px] flex justify-center">
        <img src={Poster} className="w-[100%]" alt="Poster" />
      </div>

      <div className="mt-[30px]">
        <div className="w-[80%] mx-auto">
          <Swiper
            className="items-center"
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay
          >
            <SwiperSlide className="flex justify-center">
              <div className=" grid gap-4 grid-cols-2 grid-rows-2">
                <img
                  src={CarouselImg2}
                  className="w-[100%] h-auto"
                  alt="CarouselImg"
                />
                <img
                  src={CarouselImg1}
                  className="w-[100%] h-auto"
                  alt="CarouselImg"
                />
                <img
                  src={CarouselImg1}
                  className="w-[100%] h-auto"
                  alt="CarouselImg"
                />
                <img
                  src={CarouselImg3}
                  className="w-[100%] h-auto"
                  alt="CarouselImg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className=" grid gap-4 grid-cols-2 grid-rows-2">
                <img
                  src={CarouselImg2}
                  className="w-[100%] h-auto"
                  alt="CarouselImg"
                />
                <img
                  src={CarouselImg1}
                  className="w-[100%] h-auto"
                  alt="CarouselImg"
                />
                <img
                  src={CarouselImg1}
                  className="w-[100%] h-auto"
                  alt="CarouselImg"
                />
                <img
                  src={CarouselImg3}
                  className="w-[100%] h-auto"
                  alt="CarouselImg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className=" grid gap-4 grid-cols-2 grid-rows-2">
                <img
                  src={CarouselImg2}
                  className="w-[100%] h-auto"
                  alt="CarouselImg"
                />
                <img
                  src={CarouselImg1}
                  className="w-[100%] h-auto"
                  alt="CarouselImg"
                />
                <img
                  src={CarouselImg1}
                  className="w-[100%] h-auto"
                  alt="CarouselImg"
                />
                <img
                  src={CarouselImg3}
                  className="w-[100%] h-auto"
                  alt="CarouselImg"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PopularMember;
