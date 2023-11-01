// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import HeroImg from "../assets/img/heroSection Img.svg";
import { CiTrophy } from "react-icons/ci";
import { couponsDetails } from "../constants";

const HeroSection = () => {
  return (
    <div>
      {/* Hero Carousel */}
      <div className="text-red-700 w-[80%] mx-auto my-[30px]">
        <Swiper
          className="items-center"
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay
        >
          <SwiperSlide className="flex justify-center">
            <img className="w-[80%] mx-auto" src={HeroImg} alt="HeroImg" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img className="w-[80%] mx-auto" src={HeroImg} alt="HeroImg" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img className="w-[80%] mx-auto" src={HeroImg} alt="HeroImg" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img className="w-[80%] mx-auto" src={HeroImg} alt="HeroImg" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Coupons */}

      <div className="w-[80%] mx-auto py-[50px]">
        <div className="w-[40%] mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <CiTrophy />
              <p className="text-[14px] text-[#F01C21] font-[400]">
                Popular Coupons
              </p>
            </div>
            <div className="flex items-center gap-2">
              <CiTrophy />
              <p className="text-[14px] text-[#091431] font-[400]">
                Ending Soon
              </p>
            </div>
            <div className="flex items-center gap-2">
              <CiTrophy />
              <p className="text-[14px] text-[#091431] font-[400]">
                Latest Coupons
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[30px]">
          <Swiper
            className="items-center"
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay
          >
            <SwiperSlide className="flex justify-center">
              <div className=" grid gap-4 grid-cols-3 grid-rows-2">
                {couponsDetails.map((items) => (
                  <div
                    key={items.id}
                    className="flex flex-col items-center gap-5 border-[1px] border-[#ECECEC] py-4 px-5 text-center"
                  >
                    <h4 className="text-[18px] text-[#3BA615] font-[500] w-[50%] ">
                      {items.heading}
                    </h4>
                    <img src={items.img} alt={items.img} className="w-[40%]" />
                    <p className="text-[16px] font-[400] text-[#878787] w-[60%]">
                      {items.desc}
                    </p>
                    <button className="bg-[#F01C21] px-[16px] py-[12px] rounded-[8px] w-[60%] text-[#FFFFFF] text-[14px] font-[500]">
                      {items.btnText}
                    </button>
                  </div>
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className=" grid gap-4 grid-cols-3 grid-rows-2">
                {couponsDetails.map((items) => (
                  <div
                    key={items.id}
                    className="flex flex-col items-center gap-5 border-[1px] border-[#ECECEC] py-4 px-5 text-center"
                  >
                    <h4 className="text-[18px] text-[#3BA615] font-[500] w-[50%] ">
                      {items.heading}
                    </h4>
                    <img src={items.img} alt={items.img} className="w-[40%]" />
                    <p className="text-[16px] font-[400] text-[#878787] w-[60%]">
                      {items.desc}
                    </p>
                    <button className="bg-[#F01C21] px-[16px] py-[12px] rounded-[8px] w-[60%] text-[#FFFFFF] text-[14px] font-[500]">
                      {items.btnText}
                    </button>
                  </div>
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className=" grid gap-4 grid-cols-3 grid-rows-2">
                {couponsDetails.map((items) => (
                  <div
                    key={items.id}
                    className="flex flex-col items-center gap-5 border-[1px] border-[#ECECEC] py-4 px-5 text-center"
                  >
                    <h4 className="text-[18px] text-[#3BA615] font-[500] w-[50%] ">
                      {items.heading}
                    </h4>
                    <img src={items.img} alt={items.img} className="w-[40%]" />
                    <p className="text-[16px] font-[400] text-[#878787] w-[60%]">
                      {items.desc}
                    </p>
                    <button className="bg-[#F01C21] px-[16px] py-[12px] rounded-[8px] w-[60%] text-[#FFFFFF] text-[14px] font-[500]">
                      {items.btnText}
                    </button>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Deal of the day */}

      <div className="w-[80%] mx-auto py-[50px]">
        <div className="text-center">
          <p className="text-[24px] font-[400] text-[#091431]">
            Deals Of The Day
          </p>
          <div className="w-[100px] mt-[5px] h-[5px] bg-[#F01C21] mx-auto"></div>
        </div>

        <div className="mt-[30px]">
          <Swiper
            className="items-center h-[260px]"
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay
          >
            <SwiperSlide className="flex justify-center">
              <div className=" grid gap-4 grid-cols-4 grid-rows-2">
                {couponsDetails.slice(0, 4).map((items) => (
                  <div
                    key={items.id}
                    className="flex flex-col items-center gap-5 border-[1px] border-[#ECECEC] py-4 px-5 text-center"
                  >
                    <img src={items.img} alt={items.img} className="w-[40%]" />
                    <p className="text-[16px] font-[400] text-[#878787] w-[60%]">
                      {items.desc}
                    </p>
                    <button className="bg-[#F01C21] px-[16px] py-[12px] rounded-[8px] w-[60%] text-[#FFFFFF] text-[14px] font-[500]">
                      {items.btnText}
                    </button>
                  </div>
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
            <div className=" grid gap-4 grid-cols-4">
                {couponsDetails.slice(0, 4).map((items) => (
                  <div
                    key={items.id}
                    className="flex flex-col items-center gap-5 border-[1px] border-[#ECECEC] py-4 px-5 text-center"
                  >
                    <img src={items.img} alt={items.img} className="w-[40%]" />
                    <p className="text-[16px] font-[400] text-[#878787] w-[60%]">
                      {items.desc}
                    </p>
                    <button className="bg-[#F01C21] px-[16px] py-[12px] rounded-[8px] w-[60%] text-[#FFFFFF] text-[14px] font-[500]">
                      {items.btnText}
                    </button>
                  </div>
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
            <div className=" grid gap-4 grid-cols-4 grid-rows-2">
                {couponsDetails.slice(0, 4).map((items) => (
                  <div
                    key={items.id}
                    className="flex flex-col items-center gap-5 border-[1px] border-[#ECECEC] py-4 px-5 text-center"
                  >
                    <img src={items.img} alt={items.img} className="w-[40%]" />
                    <p className="text-[16px] font-[400] text-[#878787] w-[60%]">
                      {items.desc}
                    </p>
                    <button className="bg-[#F01C21] px-[16px] py-[12px] rounded-[8px] w-[60%] text-[#FFFFFF] text-[14px] font-[500]">
                      {items.btnText}
                    </button>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
