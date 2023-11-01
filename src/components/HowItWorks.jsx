import React from "react";
import { AiOutlineLogin, AiOutlineCreditCard } from "react-icons/ai";
import { RiCouponLine } from "react-icons/ri";
import phone1 from "../assets/img/Phone-1.svg";
import phone2 from "../assets/img/Phone.svg";
import appleStore from "../assets/img/apple.svg";
import playstore from "../assets/img/playstore.svg";
import popularCategoryImg from "../assets/img/popularCategoryImg.svg";
import { popularCategory } from "../constants";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";

const HowItWorks = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="w-[80%] mx-auto">
        <div className="text-center">
          <p className="text-[24px] font-[400] text-[#091431]">How It Works?</p>
          <div className="w-[100px] mt-[5px] h-[5px] bg-[#F01C21] mx-auto"></div>
        </div>

        <div className="flex justify-between gap-4 text-center py-[50px] relative">
            <img src={arrow1} alt="arrow" className="absolute top-[150px] left-[300px]" />
            <img src={arrow2} alt="arrow" className="absolute top-[90px] right-[320px]" />
          <div className="border-[1px] border-[#ECECEC] px-[16px] py-[24px] rounded-[16px] flex flex-col gap-4 items-center">
            <div className="p-[16px] bg-[#FDDDDE] rounded-[14px] opacity-[85%] mb-6">
              <AiOutlineLogin className="text-[#0C1230] w-[20px] h-[20px]" />
            </div>

            <p className="text-[18px] font-[500] text-[#091431]">Signup</p>
            <p className="text-[14px] font-[400] text-[#454749] w-[350px]">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there
            </p>
          </div>
          <div className="border-[1px] border-[#ECECEC] px-[16px] py-[24px] rounded-[16px] flex flex-col gap-4 items-center">
            <div className="p-[16px] bg-[#FDDDDE] rounded-[14px] opacity-[85%] mb-6">
              <RiCouponLine className="text-[#0C1230] w-[20px] h-[20px]" />
            </div>

            <p className="text-[18px] font-[500] text-[#091431]">
              Choose Coupon
            </p>
            <p className="text-[14px] font-[400] text-[#454749] w-[350px]">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there sure there
            </p>
          </div>
          <div className="border-[1px] border-[#ECECEC] px-[16px] py-[24px] rounded-[16px] flex flex-col gap-4 items-center">
            <div className="p-[16px] bg-[#FDDDDE] rounded-[14px] opacity-[85%] mb-6">
              <AiOutlineCreditCard className="text-[#0C1230] w-[20px] h-[20px]" />
            </div>

            <p className="text-[18px] font-[500] text-[#091431]">Grab Coupon</p>
            <p className="text-[14px] font-[400] text-[#454749] w-[350px]">
            If you are going to use a passage of Lorem Ipsum, you need to be sure there
            </p>
          </div>
        </div>

        {/* want to be a part of our team */}
        <div className="py-[40px] my-[40px] bg-[#FDDDDE] rounded-[24px] flex items-center justify-between h-[500px]">
          <div className="pl-[70px] flex flex-col gap-5">
            <p className="text-[32px] font-[500] text-[#F01C21] w-[320px]">
              Want to be a part of our team
            </p>
            <p className="text-[16px] text-[#414141] font-[300] w-[320px]">
              Be a part of best site of discount coupons
            </p>
            <div className="flex gap-4">
              <button className="w-[120px] flex justify-between items-center border-[1px] border-[#E9E8E8] rounded-[8px] py-[8px] px-[12px] bg-[#FFFFFF]">
                <img src={appleStore} alt="appleStore" />
                <div>
                  <p className="text-[8px] text-[#747577]">Download From</p>
                  <p className="uppercase text-[12px] text-[#091431] font-[500]">
                    App Store
                  </p>
                </div>
              </button>
              <button className="w-[120px] flex justify-between items-center border-[1px] border-[#E9E8E8] rounded-[8px] py-[8px] px-[12px] bg-[#FFFFFF]">
                <img src={playstore} alt="appleStore" />
                <div>
                  <p className="text-[8px] text-[#747577]">Download From</p>
                  <p className="uppercase text-[12px] text-[#091431] font-[500]">
                    App Store
                  </p>
                </div>
              </button>
            </div>
          </div>

          <div className="w-[50%] h-[100%] relative">
            <img
              src={phone1}
              alt="phone"
              className="absolute left-[50px] top-0 w-[50%]"
            />
            <img
              src={phone2}
              alt="phone"
              className="absolute right-0 bottom-[-40px] w-[50%]"
            />
          </div>
        </div>

        {/* Popular Categories */}
        <div className="flex gap-8 py-[40px]">
          <div className="w-[40%]">
            <img
              src={popularCategoryImg}
              alt="popularCategoryImg"
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className="w-[60%]">
            <p className="font-[500] text-[26px] text-[#091431]">
              Popular Categories
            </p>
            <div className="h-[4px] bg-[#F01C21] w-[100px]"></div>
            <div className="grid grid-cols-4 mt-[30px] w-[100%]">
              {popularCategory.map((items) => (
                <div key={items.id} className="border py-3 px-5 text-center">
                  <p className="text-[#091431] text-[16px] font-[400]">
                    {items.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
