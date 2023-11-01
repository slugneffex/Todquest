import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { couponsDetails, categoryDeals } from "../constants";

const CouponByCategories = () => {
  return (
    <div className="deals-by-category bg-[#DADADA40] py-[50px]">
      <div className="text-center w-[80%] mx-auto">
        <p className="text-[24px] font-[400] text-[#091431]">
        Coupon By Categories
        </p>
        <div className="w-[100px] mt-[5px] h-[5px] bg-[#F01C21] mx-auto"></div>
      </div>

      <div className="w-[80%] mx-auto ">
        <div className="mt-[30px]">
            <div className="flex justify-between w-[100%]">
                {
                    categoryDeals.map((item) => (
                        <div key={item.id} className="flex flex-col items-center bg-[#FFFFFF] px-9 py-5 rounded-t-[8px] hover:border-b-4 hover:border-[#F01C21] hover:py-4">
                            <img src={item.img} alt="" />
                            <p>{item.name}</p>
                        </div>
                    ))
                }
            </div>

          <Swiper
            className="items-center h-[260px] bg-[#FFFFFF] rounded-b-[16px]"
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
                    className="flex flex-col items-center gap-5 py-4 px-5 text-center"
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
                    className="flex flex-col items-center gap-5 py-4 px-5 text-center"
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
                    className="flex flex-col items-center gap-5 py-4 px-5 text-center"
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

export default CouponByCategories;
